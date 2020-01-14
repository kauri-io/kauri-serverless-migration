import { of, from } from 'rxjs'
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
    ignoreElements,
} from 'rxjs/operators'
import { path } from 'ramda'
import {
    addCommentVariables,
    addComment,
} from '../../queries/__generated__/addComment'
import { stageTip as stageTipMutation, getTipAddress } from '../../queries/Tip'
import { ethers } from 'ethers'
import {
    stageTip,
    stageTipVariables,
} from '../../queries/__generated__/stageTip'
import { State } from './components/TransactionModal'

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
                    mergeMap(() =>
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
                        ).pipe(
                            switchMap(
                                ({
                                    data: {
                                        getTipAddress: { address },
                                    },
                                }) =>
                                    from(global.window.ethereum.enable()).pipe(
                                        switchMap((accounts: any) => {
                                            const provider = new ethers.providers.Web3Provider(
                                                global.window.web3.currentProvider
                                            )

                                            const params = [
                                                {
                                                    from: accounts[0],
                                                    to: address,
                                                    value: ethers.utils
                                                        .parseUnits(
                                                            amount,
                                                            'ether'
                                                        )
                                                        .toHexString(),
                                                },
                                            ]

                                            return provider.send(
                                                'eth_sendTransaction',
                                                params
                                            )
                                        }),
                                        tap(_ =>
                                            setTransactionState(State.PENDING)
                                        ),
                                        tap(transactionHash => {
                                            console.log(
                                                'TX HASH: ' + transactionHash
                                            )
                                        }),
                                        mergeMap(transactionHash =>
                                            from(
                                                apolloClient.mutate<
                                                    stageTip,
                                                    stageTipVariables
                                                >({
                                                    mutation: stageTipMutation,
                                                    variables: {
                                                        transactionHash,
                                                        recipientResourceId: {
                                                            id: resourceId,
                                                            type: resourceType,
                                                        },
                                                    },
                                                })
                                            ).pipe(
                                                tap(({ data }) =>
                                                    console.log(
                                                        JSON.stringify(data)
                                                    )
                                                ),
                                                mergeMap(({ data }) =>
                                                    apolloSubscriber(
                                                        path<string>([
                                                            'stageTip',
                                                            'hash',
                                                        ])(data) || ''
                                                    )
                                                ),
                                                tap(() =>
                                                    console.log(
                                                        'Waiting for tx'
                                                    )
                                                ),
                                                mergeMap(() =>
                                                    apolloSubscriber(
                                                        transactionHash
                                                    )
                                                ),
                                                tap(() =>
                                                    setTransactionState(
                                                        State.MINED
                                                    )
                                                ),
                                                tap(() =>
                                                    console.log('Got tx')
                                                ),
                                                tap(() =>
                                                    apolloClient.resetStore()
                                                ),
                                                ignoreElements()
                                            )
                                        )
                                    )
                            ),
                            catchError(err => {
                                console.error(err)
                                setTransactionState(State.ERROR)
                                if (
                                    err.message &&
                                    err.code &&
                                    err.code === 4001
                                ) {
                                    return of(
                                        showNotificationAction({
                                            description:
                                                'Tipping transaction rejected.',
                                            message: 'Failure',
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
                            })
                        )
                    ),
                    catchError(err => {
                        console.error(err)
                        setTransactionState(State.ERROR)
                        if (
                            err.message &&
                            err.message.includes('Wrong network')
                        ) {
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
                    })
                )
        )
    )
