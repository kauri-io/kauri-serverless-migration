import { of, from } from 'rxjs'
import { IDependencies, IReduxState } from '../../lib/Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { Epic, ofType } from 'redux-observable'
import { vote as voteMutation, addCommentMutation } from '../../queries/Article'
import { voteVariables, vote } from '../../queries/__generated__/vote'
import analytics from '../../lib/analytics'
import { switchMap, mergeMap, tap, catchError, mapTo } from 'rxjs/operators'
import { path } from 'ramda'
import {
    addCommentVariables,
    addComment,
    addComment_addComment,
} from '../../queries/__generated__/addComment'

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
