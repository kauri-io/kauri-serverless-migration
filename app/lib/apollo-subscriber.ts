import { apollo } from './with-data'
import { getEvent } from '../queries/Module'

export const apolloChildHashesSubscriber = childHashes =>
    childHashes.map(
        hash =>
            new Promise((resolve, reject) =>
                apollo
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

export const apolloHashSubscriber = (hash: string) =>
    new Promise((resolve, reject) =>
        apollo
            .subscribe({
                query: getEvent,
                variables: { hash },
            })
            .subscribe({
                next: data => resolve(data),
                error: err => reject(err),
            })
    )

export default apolloHashSubscriber
