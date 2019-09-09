import { dispatchEpic } from '../with-data'

describe('lib/with-data', () => {
    it('should dispatch epics', async () => {
        const epic = jest.fn().mockReturnValue({
            toPromise: jest.fn().mockResolvedValue('test toPromise value'),
        })
        const dummyAction = {
            type: 'test action',
        }
        const result = await dispatchEpic(epic, dummyAction)
        expect(result).toEqual('test toPromise value')
    })
})
