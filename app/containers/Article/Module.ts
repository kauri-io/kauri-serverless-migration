import { of, from, OperatorFunction, pipe } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Epic, ofType } from 'redux-observable'
import { vote as voteMutation, addCommentMutation } from '../../queries/Article'
import { voteVariables, vote } from '../../queries/__generated__/vote'
import analytics from '../../lib/analytics'
import {
    switchMap,
    mergeMap,
    tap,
    catchError,
    mapTo,
    map,
} from 'rxjs/operators'
import { path } from 'ramda'
import {
    addCommentVariables,
    addComment,
} from '../../queries/__generated__/addComment'
import { stageTip as stageTipMutation, getTipAddress } from '../../queries/Tip'
import {
    stageTip,
    stageTipVariables,
} from '../../queries/__generated__/stageTip'
import { State } from './components/TransactionModal'
import { sendTransaction } from '../../lib/web3-send-transaction'
import ApolloClient from 'apollo-client'

export interface IVoteAction {
    type: string
    payload: voteVariables
    callback?: any
}

const VOTE = 'VOTE'

export const voteAction = (payload: voteVariables): IVoteAction => ({
    payload,
    type: VOTE,
})

export const voteEpic: Epic<IVoteAction, any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber }
) =>
    action$.pipe(
        ofType(VOTE),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<vote, voteVariables>({
                    mutation: voteMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber(path<string>(['vote', 'hash'])(data) || '')
                ),
                tap(() =>
                    analytics.track('Vote Content', {
                        category: 'article_actions',
                        type: payload.value === 1 ? 'Upvoted' : 'Downvoted',
                    })
                ),

                tap(() => apolloClient.resetStore()),
                mergeMap(() =>
                    of(
                        showNotificationAction({
                            description:
                                payload &&
                                typeof payload.value === 'number' &&
                                payload.value > 0
                                    ? 'Your vote has been counted! Thanks for your feedback!'
                                    : 'Please leave a comment below with your feedback to the author to help them improve the article.',
                            message: `Voted`,
                            notificationType: 'success',
                        })
                    )
                ),

                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Voting error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )

export type IAddCommentAction = {
    type: string
    payload: addCommentVariables
    callback: any
}

export const ADD_COMMENT: string = 'ADD_COMMENT'

export const addCommentAction = (
    payload: addCommentVariables,
    callback: any
): IAddCommentAction => ({
    type: ADD_COMMENT,
    payload,
    callback,
})

export const addCommentEpic: Epic<
    IAddCommentAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(ADD_COMMENT),
        switchMap(({ payload: { parent, body }, callback }) =>
            from(
                apolloClient.mutate<addComment, addCommentVariables>({
                    mutation: addCommentMutation,
                    variables: { parent, body },
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ error?: string }>(
                        path<string>(['addComment', 'hash'])(data) || ''
                    )
                ),
                // tap(console.log),
                tap(_ => (callback ? callback() : null)),
                tap(() =>
                    analytics.track('Leave Comment', {
                        category: 'article_actions',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mapTo(
                    showNotificationAction({
                        notificationType: 'success',
                        message: 'Comment added',
                        description: `Your comment has been added to the article!`,
                    })
                ),
                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            notificationType: 'error',
                            message: 'Submission error',
                            description: 'Please try again!',
                        })
                    )
                })
            )
        )
    )

export interface ITipAction {
    type: string
    payload: any
    setTransactionState: (number) => void
}

interface IGetTipAddressResult {
    getTipAddress: {
        address: string
    }
}

export const TIP: string = 'TIP'

export const tipAction = (
    payload: { resourceId: string; resourceType: string; amount: string },
    setTransactionState
): ITipAction => ({
    type: TIP,
    payload,
    setTransactionState,
})

export const tipEpic: Epic<ITipAction, any, IReduxState, IDependencies> = (
    action$,
    _,
    { apolloClient, apolloSubscriber, web3GetNetwork }
) =>
    action$.pipe(
        ofType(TIP),
        switchMap(
            ({
                payload: { resourceId, resourceType, amount },
                setTransactionState,
            }) =>
                web3GetNetwork().pipe(
                    getTipAddressOperator(
                        apolloClient,
                        resourceId,
                        resourceType
                    ),
                    sendTipTransactionOperator(amount, setTransactionState),
                    stageTipOperator(
                        apolloClient,
                        apolloSubscriber,
                        amount,
                        resourceId,
                        resourceType
                    ),
                    tap(() => apolloClient.resetStore()),
                    waitForTipTxOperator(apolloSubscriber, setTransactionState),
                    tap(() => apolloClient.resetStore()),
                    // map(() => {
                    //     console.log("In show notification")
                    //     return showNotificationAction({
                    //         notificationType: 'success',
                    //         message: 'Tip Successful',
                    //         description: `Your tip has been sent to the author, thanks!`,
                    //     })
                    // }),
                    catchError(err => {
                        return handleTippingError(err, setTransactionState)
                    })
                )
        )
    )

const getTipAddressOperator = (
    apolloClient: ApolloClient<{}>,
    resourceId: any,
    resourceType: any
): OperatorFunction<any, any> => {
    return mergeMap(() =>
        from(
            apolloClient.query<IGetTipAddressResult>({
                fetchPolicy: 'network-only',
                query: getTipAddress,
                variables: {
                    resource: {
                        id: resourceId,
                        type: resourceType,
                    },
                },
            })
        )
    )
}

const sendTipTransactionOperator = (
    amount: string,
    setTransactionState: (string) => void
): OperatorFunction<any, any> => {
    return switchMap(({ data: { getTipAddress: { address } } }) =>
        from(global.window.ethereum.enable()).pipe(
            switchMap((accounts: any) =>
                sendTransaction(accounts[0], address, amount)
            ),
            tap(_ => setTransactionState(State.PENDING))
        )
    )
}

const stageTipOperator = (
    apolloClient: ApolloClient<{}>,
    apolloSubscriber: any,
    amount: any,
    resourceId: any,
    resourceType: any
): OperatorFunction<any, any> => {
    return mergeMap(transactionHash =>
        from(
            apolloClient.mutate<stageTip, stageTipVariables>({
                mutation: stageTipMutation,
                variables: {
                    transactionHash,
                    recipientResourceId: {
                        id: amount === '0.0123' ? resourceId + '1' : resourceId,
                        type: resourceType,
                    },
                    tipValue: amount,
                    tokenType: 'ETH',
                },
            })
        ).pipe(
            tap(({ data }) => console.log(JSON.stringify(data))),
            mergeMap(({ data }) => {
                return apolloSubscriber(
                    path<string>(['stageTip', 'hash'])(data) || ''
                )
            }),
            map(wsResult => {
                const status =
                    (wsResult &&
                        path<string>(['data', 'getEvent', 'status'])(
                            wsResult
                        )) ||
                    ''
                console.log(JSON.stringify(wsResult))
                console.log(status)
                if (status === 'ERROR') {
                    throw new Error('Staging Error')
                }

                return transactionHash
            })
        )
    )
}

const waitForTipTxOperator = (
    apolloSubscriber: any,
    setTransactionState: (string) => void
): OperatorFunction<any, any> => {
    return pipe(
        mergeMap(transactionHash => apolloSubscriber(transactionHash)),
        tap(() => setTransactionState(State.MINED))
    )
}

const handleTippingError = (err, setTransactionState) => {
    console.error(err)

    if (err.message === 'Staging Error') {
        setTransactionState(State.STAGING_ERROR)
        return of({ type: 'NOOP' })
    }

    setTransactionState(State.GENERIC_ERROR)
    if (err.code && err.code === 4001) {
        return of(
            showNotificationAction({
                description: 'Tipping transaction rejected.',
                message: 'Failure',
                notificationType: 'error',
            })
        )
    } else if (err.message && err.message.includes('Wrong network')) {
        return of(
            showNotificationAction({
                description:
                    'Please switch to the Rinkeby network to tip an article author!',
                message: 'Wrong network',
                notificationType: 'error',
            })
        )
    } else {
        return of(
            showNotificationAction({
                description: 'Please try again!',
                message: 'Tipping error',
                notificationType: 'error',
            })
        )
    }
}
