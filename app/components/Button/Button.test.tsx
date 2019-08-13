import Button from '@material-ui/core/Button'
import AddMemberButton from './AddMemberButton'
import MediumImportButton from './MediumImportButton'
import UploadLogoButton from './UploadLogoButton'
import AddTagButton from './AddTagButton'
import { mountWithTheme } from '../../setupTests'

describe('components/Button', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <Button color="primary" variant="contained">
                Test
            </Button>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/SecondaryButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <Button color="primary" variant="outlined">
                Test
            </Button>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/TertiaryButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <Button color="primary" variant="text">
                Test
            </Button>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddMemberButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<AddMemberButton>Test</AddMemberButton>)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/MediumImportButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(<MediumImportButton />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/UploadLogoButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <UploadLogoButton callback={jest.fn()}>Test</UploadLogoButton>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/AddTagButton', () => {
    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <AddTagButton bg="https://test.com/image.png" />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
