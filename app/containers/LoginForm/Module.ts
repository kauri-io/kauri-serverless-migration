import { Observable, of, from } from 'rxjs'
import cookie from 'cookie'
import createReducer from '../../lib/createReducer'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { loginPersonalSign } from '../../lib/web3-personal-sign'
import superagent from 'superagent'
import config from '../../config'
import { ofType } from 'redux-observable'
import { switchMap, mergeMap, map, tap } from 'rxjs/operators'
import { IReduxState } from '../../lib/Module'

const request = superagent.agent()

export interface IRegisterAction {
    type: string
    callback: any
}

const initialState = {}

const REGISTER: string = 'REGISTER'

export const registerAction = (callback: any): IRegisterAction => ({
    type: REGISTER,
    callback,
})

interface IInitiateLoginResponse {
    id: string
    sentence: string
    date_created: number
    date_expiration: number
    app_id: string
    active: boolean
}

interface IFinalLoginResponse {
    app_id: string
    client_id: string
    address: string
    expiration: number
    token: string
}

const registerSignaturePayload = (userId, signature, sentence_id) => ({
    address: userId,
    signature,
    sentence_id,
    app_id: config.appId,
    client_id: config.clientId,
})

export const registerEpic = (action$: Observable<IRegisterAction>) =>
    action$.pipe(
        ofType(REGISTER),
        switchMap(({ callback }: IRegisterAction) =>
            from(
                window.ethereum
                    ? window.ethereum.enable()
                    : new Promise(resolve => resolve())
            ).pipe(
                mergeMap(() =>
                    request
                        // http://api.dev2.kauri.io/web3auth/api/login?app_id=kauri&client_id=kauri-gateway
                        .get(
                            `https://${config.gateway}/web3auth/api/login?app_id=${config.appId}&client_id=${config.clientId}`
                        )
                ),
                map(res => res.body),
                tap(h => console.log(h)),
                switchMap(({ sentence, id }: IInitiateLoginResponse) =>
                    loginPersonalSign(sentence)
                        .map((signature: string) =>
                            registerSignaturePayload(
                                window.web3.eth.accounts[0],
                                signature,
                                id
                            )
                        )
                        .mergeMap(payload =>
                            request
                                .post(
                                    `https://${config.gateway}/web3auth/api/login`
                                )
                                .send(payload)
                        )
                        .map(res => res.body)
                        .do(h => console.log(h))
                        .do(() => callback())
                        .do(({ token }: IFinalLoginResponse) => {
                            console.log(token)
                            console.log(
                                global.window &&
                                    global.window.web3.eth.accounts[0]
                            )
                            document.cookie = cookie.serialize('TOKEN', token, {
                                maxAge: 30 * 24 * 60 * 60, // 30 days,
                                domain:
                                    window &&
                                    window.location.hostname.includes(
                                        'localhost'
                                    )
                                        ? window.location.hostname
                                        : '.' + window.location.hostname,
                            })
                            document.cookie = cookie.serialize(
                                'USER_ID',
                                window.web3.eth.accounts[0],
                                {
                                    maxAge: 30 * 24 * 60 * 60, // 30 days
                                    domain:
                                        window &&
                                        window.location.hostname.includes(
                                            'localhost'
                                        )
                                            ? window.location.hostname
                                            : '.' + window.location.hostname,
                                }
                            )
                        })
                        .mergeMapTo(
                            of(
                                showNotificationAction({
                                    notificationType: 'success',
                                    message: 'Login successful',
                                    description:
                                        'All set! Time to write an article!',
                                })
                            )
                        )
                        .do(() =>
                            window.localStorage.setItem(
                                'login-tracking-pending',
                                'true'
                            )
                        )
                        .delay(750)
                        .do(() => {
                            window.location.href =
                                '/edit-profile' + window.location.search
                        })
                        .catch(err => {
                            console.error(err)
                            if (err && err.message.includes('locked')) {
                                return of(
                                    showNotificationAction({
                                        notificationType: 'error',
                                        message: 'Your wallet is locked!',
                                        description:
                                            'Please unlock your wallet!',
                                    })
                                )
                            }
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
    )

const handlers = {
    [REGISTER]: (state: IReduxState) => ({
        ...state,
    }),
}

export default createReducer(initialState, handlers)
