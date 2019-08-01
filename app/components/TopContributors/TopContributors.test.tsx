import TopContributors from './index'
import { mountWithTheme } from '../../setupTests'

jest.mock('../../lib/analytics', () => ({
    track: jest.fn(),
}))

let props = {
    contributors: [
        {
            avatar: 'test url',
            username: 'test username',
        },
    ],
    routeChangeAction: jest.fn(),
    linkComponent: jest.fn(),
}

describe('components/TopContributors', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<TopContributors {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
