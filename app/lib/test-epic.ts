import { ActionsObservable } from 'redux-observable'
import { Subject } from 'rxjs'
import { toArray } from 'rxjs/operators'

const testEpic = (epic, action, state = {}, dependencies = {}) => {
    const actions = new Subject()
    const actions$ = new ActionsObservable(actions as any)
    const store = { value: state }

    const promised = epic(actions$, store, dependencies)
        .pipe(toArray())
        .toPromise()

    if (action.length) {
        action.map(act => actions.next(act))
        actions.complete()
    } else {
        actions.next(action)
        actions.complete()
    }

    return promised
}

export default testEpic
