import { of, from, merge, OperatorFunction, pipe } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Epic, ofType } from 'redux-observable'
import {
    vote as voteMutation,
    addCommentMutation,
    finaliseArticleTransferMutation,
    editCommentMutation,
    deleteCommentMutation,
} from '../../queries/Article'
import { voteVariables, vote } from '../../queries/__generated__/vote'
import analytics from '../../lib/analytics'
import {
    switchMap,
    mergeMap,
    tap,
    catchError,
    mapTo,
    map,
    ignoreElements,
} from 'rxjs/operators'
import { path } from 'ramda'
import {
    addCommentVariables,
    addComment,
} from '../../queries/__generated__/addComment'
import {
    initiateArticleTransferVariables,
    initiateArticleTransfer,
} from '../../queries/__generated__/initiateArticleTransfer'
import { personalSign } from '../../lib/web3-personal-sign'
import generatePublishArticleHash from '../../lib/generate-publish-article-hash'
import {
    finaliseArticleTransfer,
    finaliseArticleTransferVariables,
} from '../../queries/__generated__/finaliseArticleTransfer'
import { initiateArticleTransferMutation } from '../../queries/Community'
import {
    editCommentVariables,
    editComment,
} from '../../queries/__generated__/editComment'
import {
    deleteCommentVariables,
    deleteComment,
} from '../../queries/__generated__/deleteComment'
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

///////////////////////////////////////////////////////////////////////////////////////////////

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
        switchMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<addComment, addCommentVariables>({
                    mutation: addCommentMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ error?: string }>(
                        path<string>(['addComment', 'hash'])(data) || ''
                    )
                ),
                tap(_ => (callback ? callback() : null)),
                tap(() =>
                    analytics.track('comment', {
                        category: 'add_comment',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mapTo(
                    showNotificationAction({
                        notificationType: 'success',
                        message: 'Comment added',
                        description: `Your comment has been added to the ${
                            payload.parent.type === 'DISCUSSION'
                                ? 'discussion'
                                : 'article'
                        }.`,
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

///////////////////////////////////////////////////////////////////////////////////////////////

export type IEditCommentAction = {
    type: string
    payload: editCommentVariables
    callback: any
}

export const EDIT_COMMENT: string = 'EDIT_COMMENT'

export const editCommentAction = (
    payload: editCommentVariables,
    callback: any
): IEditCommentAction => ({
    type: EDIT_COMMENT,
    payload,
    callback,
})

export const editCommentEpic: Epic<
    IEditCommentAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(EDIT_COMMENT),
        switchMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<editComment, editCommentVariables>({
                    mutation: editCommentMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ error?: string }>(
                        path<string>(['editComment', 'hash'])(data) || ''
                    )
                ),
                tap(_ => (callback ? callback() : null)),
                tap(() =>
                    analytics.track('comment', {
                        category: 'edit_comment',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mapTo(
                    showNotificationAction({
                        notificationType: 'success',
                        message: 'Comment edited',
                        description: `Your comment has been edited.`,
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

///////////////////////////////////////////////////////////////////////////////////////////////

export type IDeleteCommentAction = {
    type: string
    payload: deleteCommentVariables
    callback: any
}

export const DELETE_COMMENT: string = 'DELETE_COMMENT'

export const deleteCommentAction = (
    payload: deleteCommentVariables,
    callback: any
): IDeleteCommentAction => ({
    type: DELETE_COMMENT,
    payload,
    callback,
})

export const deleteCommentEpic: Epic<
    IDeleteCommentAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(DELETE_COMMENT),
        switchMap(({ payload, callback }) =>
            from(
                apolloClient.mutate<deleteComment, deleteCommentVariables>({
                    mutation: deleteCommentMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<{ error?: string }>(
                        path<string>(['deleteComment', 'hash'])(data) || ''
                    )
                ),
                tap(_ => (callback ? callback() : null)),
                tap(() =>
                    analytics.track('comment', {
                        category: 'delete_comment',
                    })
                ),
                tap(() => apolloClient.resetStore()),
                mapTo(
                    showNotificationAction({
                        notificationType: 'success',
                        message: 'Comment deleted',
                        description: `Your comment has been deleted`,
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
    setTransactionState: (state: State) => void
    setTransactionHash: (txHash: string) => void
}

interface IGetTipAddressResult {
    getTipAddress: {
        address: string
    }
}

export const TIP: string = 'TIP'

export const tipAction = (
    payload: { resourceId: string; resourceType: string; amount: string },
    setTransactionState,
    setTransactionHash
): ITipAction => ({
    type: TIP,
    payload,
    setTransactionState,
    setTransactionHash,
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
                setTransactionHash,
            }) =>
                web3GetNetwork().pipe(
                    getTipAddressOperator(
                        apolloClient,
                        resourceId,
                        resourceType
                    ),
                    sendTipTransactionOperator(
                        amount,
                        setTransactionState,
                        setTransactionHash
                    ),
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
                    ignoreElements(),
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
    setTransactionState: (state: State) => void,
    setTransactionHash: (txHash: string) => void
): OperatorFunction<any, any> => {
    return switchMap(({ data: { getTipAddress: { address } } }) =>
        from(global.window.ethereum.enable()).pipe(
            switchMap((accounts: any) =>
                sendTransaction(accounts[0], address, amount)
            ),
            tap(txHash => setTransactionHash(txHash)),
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

////////////////////////////////////////////////////

const INITIATE_ARTICLE_TRANSFER = 'INITIATE_ARTICLE_TRANSFER'
const ARTICLE_TRANSFERRED_TO_COMMUNITY = 'ARTICLE_TRANSFERRED_TO_COMMUNITY'

interface IInitiateArticleTransferCommandOutput {
    hash: string
    id: string
    version: number
    articleAuthor: string
    dateCreated: string
    transferAccepted: boolean
}

interface IFinaliseArticleTransferCommandOutput {
    messageHash: string
    error?: string
}
interface IArticleTransferredToCommunityAction {
    type: 'ARTICLE_TRANSFERRED_TO_COMMUNITY'
}

export interface IInitiateArticleTransferAction {
    type: string
    payload: initiateArticleTransferVariables
}

export const articleTransferredToCommunityAction = (): IArticleTransferredToCommunityAction => ({
    type: ARTICLE_TRANSFERRED_TO_COMMUNITY,
})

export const initiateArticleTransferAction = (
    payload: initiateArticleTransferVariables
): IInitiateArticleTransferAction => ({
    payload,
    type: INITIATE_ARTICLE_TRANSFER,
})

export const initiateArticleTransferEpic: Epic<
    IInitiateArticleTransferAction,
    any,
    IReduxState,
    IDependencies
> = (action$, _, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(INITIATE_ARTICLE_TRANSFER),
        switchMap(({ payload }) =>
            from(
                apolloClient.mutate<
                    initiateArticleTransfer,
                    initiateArticleTransferVariables
                >({
                    mutation: initiateArticleTransferMutation,
                    variables: payload,
                })
            ).pipe(
                mergeMap(({ data }) =>
                    apolloSubscriber<IInitiateArticleTransferCommandOutput>(
                        path<string>(['initiateArticleTransfer', 'hash'])(
                            data
                        ) || ''
                    )
                ),
                tap(() => apolloClient.resetStore()),
                mergeMap(
                    ({
                        data: {
                            getEvent: {
                                output: {
                                    id,
                                    version,
                                    hash,
                                    articleAuthor,
                                    dateCreated,
                                    transferAccepted,
                                },
                            },
                        },
                    }) => {
                        if (transferAccepted) {
                            const signatureToSign = generatePublishArticleHash(
                                id,
                                version,
                                hash,
                                articleAuthor,
                                dateCreated
                            )

                            return from(personalSign(signatureToSign)).pipe(
                                mergeMap(signature =>
                                    from(
                                        apolloClient.mutate<
                                            finaliseArticleTransfer,
                                            finaliseArticleTransferVariables
                                        >({
                                            mutation: finaliseArticleTransferMutation,
                                            variables: {
                                                id,
                                                signature,
                                            },
                                        })
                                    )
                                ),
                                mergeMap(({ data }) =>
                                    apolloSubscriber<
                                        IFinaliseArticleTransferCommandOutput
                                    >(
                                        path<string>([
                                            'finaliseArticleTransfer',
                                            'hash',
                                        ])(data) || ''
                                    )
                                ),
                                tap(() => apolloClient.resetStore()),
                                tap(() =>
                                    analytics.track(
                                        'Article Transfer Finalised',
                                        {
                                            category: 'article_actions',
                                        }
                                    )
                                ),
                                mergeMap(
                                    ({
                                        data: {
                                            getEvent: {
                                                output: { error },
                                            },
                                        },
                                    }) =>
                                        error
                                            ? merge(
                                                  of(
                                                      showNotificationAction({
                                                          description: `There was an error transferring the article, please try again.`,
                                                          message: 'Error',
                                                          notificationType:
                                                              'error',
                                                      })
                                                  )
                                              )
                                            : merge(
                                                  of(
                                                      articleTransferredToCommunityAction()
                                                  ),
                                                  of(
                                                      showNotificationAction({
                                                          description: `Your selected article was successfully transferred`,
                                                          message:
                                                              'Ownership Transfer',
                                                          notificationType:
                                                              'success',
                                                      })
                                                  )
                                              )
                                ),
                                catchError(err => {
                                    console.error(err)
                                    return of(
                                        showNotificationAction({
                                            description: 'Please try again',
                                            message: 'Submission error',
                                            notificationType: 'error',
                                        })
                                    )
                                })
                            )
                        } else {
                            console.log('not auto-accepted')
                            return of(
                                showNotificationAction({
                                    description:
                                        'You request for transfer has been initiated, the recipient can now accept or reject your request.',
                                    message: 'Transfer Ownership',
                                    notificationType: 'success',
                                })
                            )
                        }
                    }
                ),

                catchError(err => {
                    console.error(err)
                    return of(
                        showNotificationAction({
                            description: 'Please try again!',
                            message: 'Transfer error',
                            notificationType: 'error',
                        })
                    )
                })
            )
        )
    )
