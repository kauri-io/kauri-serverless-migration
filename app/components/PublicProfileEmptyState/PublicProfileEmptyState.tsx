import PublicProfileEmptyState from './index'
import { mountWithRedux } from '../../setupTests'

describe('components/PublicProfileEmptyState', () => {
    it('should match snapshot', () => {
        const PublicProfileEmptyStateProps = {
            title: 'test',
            description: 'test description',
            iconSrc: 'url',
        }

        const wrapper = mountWithRedux(
            <PublicProfileEmptyState {...PublicProfileEmptyStateProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
