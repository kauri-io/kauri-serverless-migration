import createReducer from '../createReducer'

describe('lib/createReducer', () => {
    it('should setup the reducer', async () => {
        const createReducerFn = createReducer()
        const result = createReducerFn(
            {
                initial: 'state',
            },
            {
                type: 'test',
            }
        )
        expect(result).toEqual({
            initial: 'state',
        })
    })
})
