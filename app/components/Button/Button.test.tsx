import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import TertiaryButton from './TertiaryButton'
import AddMemberButton from './AddMemberButton'
import MediumImportButton from './MediumImportButton'
import UploadLogoButton from './UploadLogoButton'
import AddTagButton from './AddTagButton'
import { mountWithTheme } from '../../setupTests'

describe('components/PrimaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<PrimaryButton>Test</PrimaryButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/SecondaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<SecondaryButton>Test</SecondaryButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/TertiaryButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<TertiaryButton>Test</TertiaryButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddMemberButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<AddMemberButton>Test</AddMemberButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/MediumImportButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(<MediumImportButton />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadLogoButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(
            <UploadLogoButton>Test</UploadLogoButton>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddTagButton', () => {
    it('snapshot should match', () => {
        const wrapper = mountWithTheme(
            <AddTagButton bg="https://test.com/image.png" />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
