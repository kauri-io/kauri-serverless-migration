import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'
import AddMemberButton from './AddMemberButton'
import MediumImportButton from './MediumImportButton'
import UploadLogoButton from './UploadLogoButton'
import AddTagButton from './AddTagButton'
import { shallowWithTheme } from '../../setupTests'

describe('components/PrimaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<PrimaryButton>Test</PrimaryButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/SecondaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(
            <SecondaryButton>Test</SecondaryButton>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/TertiaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<TertiaryButton>Test</TertiaryButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddMemberButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(
            <AddMemberButton>Test</AddMemberButton>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/MediumImportButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(<MediumImportButton />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadLogoButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(
            <UploadLogoButton>Test</UploadLogoButton>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddTagButton', () => {
    it('snapshot should match', () => {
        const wrapper = shallowWithTheme(
            <AddTagButton bg="https://test.com/image.png" />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
