import SocialWebsiteIcon from './SocialWebsiteIcon'
import StatisticCount from './StatisticCount'
import StatisticsContainer from './StatisticsContainer'
import { mountWithRedux } from '../../setupTests'

describe('components/PublicProfile/SocialWebsiteIcon', () => {
    it('should match snapshot', () => {
        const SocialWebsiteIconProps = {
            brand: 'twitter',
        }

        const wrapper = mountWithRedux(
            <SocialWebsiteIcon {...SocialWebsiteIconProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/PublicProfile/StatisticCount', () => {
    it('should match snapshot', () => {
        const StatisticCountProps = {
            name: 'test',
            count: 4,
            pageType: 'collection',
        }

        const wrapper = mountWithRedux(
            <StatisticCount {...StatisticCountProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/PublicProfile/StatisticsContainer', () => {
    it('should match snapshot', () => {
        const StatisticsContainerProps = {
            statistics: [
                {
                    name: 'test',
                    count: 4,
                    pageType: 'collection',
                },
                {
                    name: 'test2',
                    count: 4,
                    pageType: 'collection',
                },
            ],
        }

        const wrapper = mountWithRedux(
            <StatisticsContainer {...StatisticsContainerProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
