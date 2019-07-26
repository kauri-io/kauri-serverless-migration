import TopContributors from './index'
import { mountWithTheme } from '../../setupTests'

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