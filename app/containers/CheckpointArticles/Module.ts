import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { checkpointArticles } from '../../queries/Article'
import analytics from '../../lib/analytics'
import { IDependencies, IReduxState } from '../../lib/Module'
import { of, from } from 'rxjs'
import { ofType, Epic } from 'redux-observable'
import { switchMap, mergeMap, tap, mapTo, catchError } from 'rxjs/operators'

const CHECKPOINT_ARTICLES = 'CHECKPOINT_ARTICLES'

export interface CheckpointArticlesAction {
    type: string
}

type CheckpointArticlesCommandOutput = {
    merkleRoot: string
    checkpointHash: string
    signatureV: string
    signatureR: string
    signatureS: string
}

type CheckpointArticlesCommandResponse = {
    data: { output: CheckpointArticlesCommandOutput }
}

interface ICheckpointArticlesCommandOutput {
    hash: string
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
        web3,
        web3GetNetwork,
        apolloSubscriber,
        getGasPrice,
    }
) =>
    action$.pipe(
        ofType(CHECKPOINT_ARTICLES),
        switchMap(() =>
            web3GetNetwork()
                .mergeMap(() =>
                    apolloClient.mutate({
                        mutation: checkpointArticles,
                        variables: {},
                    })
                )
                .flatMap(({ data: { checkpointArticles: { hash } } }) =>
                    from(apolloSubscriber(hash))
                )
                .do(h => console.log(h))
                .switchMap(
                    ({
                        data: {
                            output: {
                                merkleRoot,
                                checkpointHash,
                                signatureV,
                                signatureR,
                                signatureS,
                            },
                        },
                    }) =>
                        from(getGasPrice()).pipe(
                            mergeMap<number, string>(gasPrice =>
                                (smartContracts().KauriCore
                                    .checkpointArticles as any).sendTransaction(
                                    merkleRoot,
                                    checkpointHash,
                                    signatureV,
                                    signatureR,
                                    signatureS,
                                    {
                                        from: web3.eth.accounts[0],
                                        value: 0,
                                        gas: 250000,
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
                )
                .catch(err => {
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
