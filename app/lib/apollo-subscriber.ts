import initApollo from './init-apollo'
import { getEvent } from '../queries/Module'
import cookie from 'cookie'

const token = cookie.parse((global.document && global.document.cookie) || '')[
    'TOKEN'
]

export const apolloChildHashesSubscriber = childHashes =>
    childHashes.map(
        hash =>
            new Promise((resolve, reject) =>
                initApollo({}, { getToken: () => token })
                    .subscribe({
                        query: getEvent,
                        variables: { hash },
                    })
                    .subscribe({
                        next: data => resolve(data),
                        error: err => reject(err),
                    })
            )
    )

export const apolloHashSubscriber = (hash: string, event?: string) => {
    return new Promise((resolve, reject) =>
        initApollo({}, token)
            .subscribe({
                query: getEvent,
                variables: { hash: event ? `${hash}-${event}` : hash },
            })
            .subscribe({
                next: data => resolve(data),
                error: err => reject(err),
            })
    )
}

export default apolloHashSubscriber
