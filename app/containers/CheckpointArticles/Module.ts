import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { checkpointArticles } from '../../queries/Article'
import analytics from '../../lib/analytics'
import { IDependencies, IReduxState } from '../../lib/Module'
import { of, from } from 'rxjs'
import { ofType, Epic } from 'redux-observable'
import { switchMap, mergeMap, tap, mapTo, catchError } from 'rxjs/operators'

const CHECKPOINT_ARTICLES = 'CHECKPOINT_ARTICLES'

export interface CheckpointArticlesAction {
    type: 'CHECKPOINT_ARTICLES'
}

interface ICheckpointArticlesCommandOutput {
    merkleRoot: string
    checkpointHash: string
    signatureV: string
    signatureR: string
    signatureS: string
}

export const checkpointArticlesAction: () => CheckpointArticlesAction = () => ({
    type: CHECKPOINT_ARTICLES,
})

export const checkpointArticlesEpic: Epic<
    CheckpointArticlesAction,
    any,
    IReduxState,
    IDependencies
> = (
    action$,
    _,
    {
        apolloClient,
        smartContracts,
        web3GetNetwork,
        apolloSubscriber,
        getGasPrice,
    }
) =>
    action$.pipe(
        ofType(CHECKPOINT_ARTICLES),
        switchMap(() =>
            web3GetNetwork().pipe(
                mergeMap(() => global.window.ethereum.enable()),
                mergeMap(() =>
                    apolloClient.mutate({
                        mutation: checkpointArticles,
                        variables: {},
                    })
                ),
                mergeMap(({ data: { checkpointArticles: { hash } } }) =>
                    from(apolloSubscriber(hash))
                ),
                // tap(h => console.log(h)),
                switchMap(
                    ({
                        data: {
                            getEvent: {
                                output: {
                                    merkleRoot,
                                    checkpointHash,
                                    signatureV,
                                    signatureR,
                                    signatureS,
                                },
                            },
                        },
                    }) =>
                        from(getGasPrice()).pipe(
                            mergeMap<number, string>(gasPrice =>
                                smartContracts().KauriCore.checkpointArticles(
                                    merkleRoot,
                                    checkpointHash,
                                    signatureV,
                                    signatureR,
                                    signatureS,
                                    {
                                        value: 0,
                                        gasPrice,
                                    }
                                )
                            ),
                            mergeMap(transactionHash =>
                                apolloSubscriber<
                                    ICheckpointArticlesCommandOutput
                                >(transactionHash, 'ArticlesCheckpointed')
                            ),
                            tap(() => apolloClient.resetStore()),
                            mapTo(
                                showNotificationAction({
                                    notificationType: 'success',
                                    message: 'Articles checkpointed!',
                                    description:
                                        'All Kauri platform articles are now On-chain!',
                                })
                            ),
                            tap(() => {
                                analytics.track('Checkpoint', {
                                    category: 'generic',
                                })
                            }),
                            catchError(err => {
                                if (
                                    err.message &&
                                    err.message.includes('locked')
                                ) {
                                    return of(
                                        showNotificationAction({
                                            notificationType: 'error',
                                            message: 'Your wallet is locked!',
                                            description:
                                                'Please unlock your wallet!',
                                        })
                                    )
                                } else if (
                                    (err.message &&
                                        err.message.includes(
                                            "'KauriCore' of undefined"
                                        )) ||
                                    err.message.includes('Wrong network')
                                ) {
                                    return of(
                                        showNotificationAction({
                                            notificationType: 'error',
                                            message: 'Wrong network',
                                            description:
                                                'Please switch to the Rinkeby network to checkpoint articles!',
                                        })
                                    )
                                } else if (
                                    err.message &&
                                    err.message.includes(
                                        'Wrong metamask account'
                                    )
                                ) {
                                    return of(
                                        showNotificationAction({
                                            notificationType: 'error',
                                            message: 'Wrong metamask account',
                                            description:
                                                'Please switch to the correct account!',
                                        })
                                    )
                                }
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
                ),
                catchError(err => {
                    if (err.message && err.message.includes('locked')) {
                        return of(
                            showNotificationAction({
                                notificationType: 'error',
                                message: 'Your wallet is locked!',
                                description: 'Please unlock your wallet!',
                            })
                        )
                    } else if (
                        (err.message &&
                            err.message.includes("'KauriCore' of undefined")) ||
                        err.message.includes('Wrong network')
                    ) {
                        return of(
                            showNotificationAction({
                                notificationType: 'error',
                                message: 'Wrong network',
                                description:
                                    'Please switch to the Rinkeby network to checkpoint articles!',
                            })
                        )
                    } else if (
                        err.message &&
                        err.message.includes('Wrong metamask account')
                    ) {
                        return of(
                            showNotificationAction({
                                notificationType: 'error',
                                message: 'Wrong metamask account',
                                description:
                                    'Please switch to the correct account!',
                            })
                        )
                    }
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
