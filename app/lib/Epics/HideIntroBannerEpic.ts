import cookie from 'cookie'
import { filter, mapTo, map } from 'rxjs/operators'
import { ActionsObservable } from 'redux-observable';

const HIDE_INTRO_BANNER: string = 'HIDE_INTRO_BANNER'
export const HIDE_INTRO_BANNER_SUCCESS: string = 'HIDE_INTRO_BANNER_SUCCESS'

export const hideIntroBannerAction = (): IHideIntroBannerAction => ({
    type: HIDE_INTRO_BANNER,
})

interface IHideIntroBannerAction {
    type: string
}

export default (action$: ActionsObservable<IHideIntroBannerAction>) =>
    action$.pipe(
        filter(action => action.type === HIDE_INTRO_BANNER),
        map(() => cookie.serialize('HIDE_INTRO_BANNER', 'true', {
            maxAge: 30 * 24 * 60 * 60 * 60, // 30 days
            })
        ),
        mapTo({ type: HIDE_INTRO_BANNER_SUCCESS })
    )