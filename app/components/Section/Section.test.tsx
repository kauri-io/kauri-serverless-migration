import ActionsSection from './ActionsSection'
import CardContentSection from './CardContentSection'
import CategorySection from './CategorySection'
import ContentSection from './ContentSection'
import PadContentSection from './PadContentSection'
import PrimaryHeaderSection from './PrimaryHeaderSection'
import TopResourcesSection from './TopResourcesSection'
import { mountWithRedux } from '../../setupTests'

describe('components/Section/ActionsSection', () => {
    it('should match snapshot', () => {
        const ActionsSectionProps = {}

        const wrapper = mountWithRedux(
            <ActionsSection {...ActionsSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/CardContentSection', () => {
    it('should match snapshot', () => {
        const CardContentSectionProps = {}

        const wrapper = mountWithRedux(
            <CardContentSection {...CardContentSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/CardContentSection', () => {
    it('should match snapshot', () => {
        const CardContentSectionProps = {}

        const wrapper = mountWithRedux(
            <CardContentSection {...CardContentSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/CategorySection', () => {
    it('should match snapshot', () => {
        const CategorySectionProps = {}

        const wrapper = mountWithRedux(
            <CategorySection {...CategorySectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/ContentSection', () => {
    it('should match snapshot', () => {
        const ContentSectionProps = {}

        const wrapper = mountWithRedux(
            <ContentSection {...ContentSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/PadContentSection', () => {
    it('should match snapshot', () => {
        const PadContentSectionProps = {}

        const wrapper = mountWithRedux(
            <PadContentSection {...PadContentSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/PrimaryHeaderSection', () => {
    it('should match snapshot', () => {
        const PrimaryHeaderSectionProps = {}

        const wrapper = mountWithRedux(
            <PrimaryHeaderSection {...PrimaryHeaderSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/Section/TopResourcesSection', () => {
    it('should match snapshot', () => {
        const TopResourcesSectionProps = {}

        const wrapper = mountWithRedux(
            <TopResourcesSection {...TopResourcesSectionProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
