import {
    toggleReducer,
    showDispatch,
    hideDispatch,
    toggleDispatch,
    ToggleActionType,
} from '../use-toggle'

const dispatch = jest.fn()
let state = {
    toggledOn: false,
}

describe('lib/use-toggle', () => {
    it('should eexport a showDispatch action', () => {
        showDispatch(dispatch)()
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'show',
        })
    })

    it('should eexport a hideDispatch action', () => {
        hideDispatch(dispatch)()
        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: 'hide',
        })
    })

    it('should eexport a toggleDispatch action', () => {
        toggleDispatch(dispatch)()
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'toggle',
        })
    })

    it('should have a reducer handling the show action', () => {
        const action = {
            type: 'show' as ToggleActionType,
        }
        state = toggleReducer(state, action)
        expect(state).toEqual({
            toggledOn: true,
        })
    })

    it('should have a reducer handling the hide action', () => {
        const action = {
            type: 'hide' as ToggleActionType,
        }
        state = toggleReducer(state, action)
        expect(state).toEqual({
            toggledOn: false,
        })
    })

    it('should have a reducer handling the toggle action when toggled off', () => {
        const action = {
            type: 'toggle' as ToggleActionType,
        }
        state = toggleReducer(state, action)
        expect(state).toEqual({
            toggledOn: true,
        })
    })

    it('should have a reducer handling the toggle action when toggled on', () => {
        const action = {
            type: 'toggle' as ToggleActionType,
        }
        state = toggleReducer(state, action)
        expect(state).toEqual({
            toggledOn: false,
        })
    })

    it('should return an error if a wrong action gets dispatched', () => {
        const action = {
            type: 'test' as ToggleActionType,
        }
        expect(() => toggleReducer(state, action)).toThrow()
    })
})
