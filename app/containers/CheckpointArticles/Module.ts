import Observable from 'rxjs/Observable'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { checkpointArticles } from '../../queries/Article'
import analytics from '../../lib/analytics'
import { IDependencies } from '../../lib/Module'

const CHECKPOINT_ARTICLES = 'CHECKPOINT_ARTICLES'

type CheckpointArticlesAction = {
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

export const checkpointArticlesAction: () => CheckpointArticlesAction = () => ({
    type: CHECKPOINT_ARTICLES,
})

export const checkpointArticlesEpic = (
    action$: Observable<CheckpointArticlesAction>,
    { dispatch }: any,
    {
        apolloClient,
        smartContracts,
        web3,
        web3GetNetwork,
        apolloSubscriber,
        getGasPrice,
    }: IDependencies
) =>
    action$
        .ofType(CHECKPOINT_ARTICLES)
        .switchMap((action: CheckpointArticlesAction) =>
            web3GetNetwork()
                .mergeMap(() =>
                    apolloClient.mutate({
                        mutation: checkpointArticles,
                        variables: {},
                    })
                )
                .flatMap(({ data: { checkpointArticles: { hash } } }) =>
                    Observable.fromPromise(apolloSubscriber(hash))
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
                    }: CheckpointArticlesCommandResponse) =>
                        Observable.fromPromise(getGasPrice())
                            .mergeMap(gasPrice =>
                                smartContracts().KauriCore.checkpointArticles.sendTransaction(
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
                            )
                            .do((transactionHash: string) => {
                                dispatch(
                                    showNotificationAction({
                                        notificationType: 'info',
                                        message: 'Waiting for it to be mined',
                                        description:
                                            'You will get another notification when the block is mined!',
                                    })
                                )
                            })
                            .mergeMap((transactionHash: string) =>
                                apolloSubscriber(
                                    transactionHash,
                                    'ArticlesCheckpointed'
                                )
                            )
                            .do(() => apolloClient.resetStore())
                            .mapTo(
                                showNotificationAction({
                                    notificationType: 'success',
                                    message: 'Articles checkpointed!',
                                    description:
                                        'All Kauri platform articles are now On-chain!',
                                })
                            )
                            .do(() => {
                                analytics.track('Checkpoint', {
                                    category: 'generic',
                                })
                            })
                            .catch(err => {
                                if (
                                    err.message &&
                                    err.message.includes('locked')
                                ) {
                                    return Observable.of(
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
                                    return Observable.of(
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
                                    return Observable.of(
                                        showNotificationAction({
                                            notificationType: 'error',
                                            message: 'Wrong metamask account',
                                            description:
                                                'Please switch to the correct account!',
                                        })
                                    )
                                }
                                console.error(err)
                                return Observable.of(
                                    showNotificationAction({
                                        notificationType: 'error',
                                        message: 'Submission error',
                                        description: 'Please try again!',
                                    })
                                )
                            })
                )
                .catch(err => {
                    if (err.message && err.message.includes('locked')) {
                        return Observable.of(
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
                        return Observable.of(
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
                        return Observable.of(
                            showNotificationAction({
                                notificationType: 'error',
                                message: 'Wrong metamask account',
                                description:
                                    'Please switch to the correct account!',
                            })
                        )
                    }
                    console.error(err)
                    return Observable.of(
                        showNotificationAction({
                            notificationType: 'error',
                            message: 'Submission error',
                            description: 'Please try again!',
                        })
                    )
                })
        )
