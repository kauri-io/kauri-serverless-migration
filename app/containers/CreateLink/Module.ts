import { submitExternalLink as mutation } from '../../queries/Link'
import { Epic, ofType } from 'redux-observable'
import { IReduxState, IDependencies } from '../../lib/Module'
import { switchMap, mergeMap } from 'rxjs/operators'
import { path } from 'ramda'
import {
    submitExternalLink,
    submitExternalLinkVariables,
} from '../../queries/__generated__/submitExternalLink'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import { of } from 'rxjs/internal/observable/of'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { from } from 'rxjs/internal/observable/from'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { merge } from 'rxjs'
import { getProfileURL } from '../../lib/getURLs'
const SAVE_LINK = 'SAVE_LINK'

interface ISubmitExternalLinkAction {
    type: string
    payload: ISubmitExternalLinkActionPayload
}

interface ISubmitExternalLinkActionPayload {
    url: string
    title: string
    description?: string | null
    summary?: string | null
    image: string
    authorName?: string | null
    authorSocial?: any | null
    owner?: ResourceIdentifierInput | null
    tags?: (string | null)[] | null
}

export const submitExtenalLinkAction = (
    payload: ISubmitExternalLinkActionPayload
): ISubmitExternalLinkAction => ({
    payload,
    type: SAVE_LINK,
})

export const submitExternalLinkEpic: Epic<
    ISubmitExternalLinkAction,
    any,
    IReduxState,
    IDependencies
> = (action$, state$, { apolloClient, apolloSubscriber }) =>
    action$.pipe(
        ofType(SAVE_LINK),
        switchMap(
            ({ payload: { title, description, image, summary, url, owner } }) =>
                from(
                    apolloClient.mutate<
                        submitExternalLink,
                        submitExternalLinkVariables
                    >({
                        mutation,
                        variables: {
                            title,
                            description,
                            summary,
                            attributes: { background_image: image },
                            url,
                            owner,
                        },
                    })
                ).pipe(
                    mergeMap(({ data }) =>
                        apolloSubscriber<{ hash: string }>(
                            path<string>(['submitExternalLink', 'hash'])(
                                data
                            ) || ''
                        )
                    ),
                    mergeMap(() =>
                        merge(
                            of(
                                showNotificationAction({
                                    description: `Your link has been succesfully submitted!`,
                                    message: 'Link Created',
                                    notificationType: 'success',
                                })
                            ),
                            of(
                                routeChangeAction(
                                    state$.value.app.user
                                        ? getProfileURL(state$.value.app.user)
                                              .as
                                        : '/'
                                )
                            )
                        )
                    )
                )
        )
    )
