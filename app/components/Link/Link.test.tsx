import Link from './index'

import { mountWithRedux } from '../../setupTests'

const props = {
    routeChangeAction: jest.fn(),
    callback: jest.fn(),
    toSlug: 'test',
    as: 'test',
    href: 'test',
    fullWidth: true,
    useAnchorTag: true,
}

describe('components/Link', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithRedux(
            <Link {...props}>
                <div>Test</div>
            </Link>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
