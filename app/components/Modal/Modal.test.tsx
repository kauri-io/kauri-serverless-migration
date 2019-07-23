import AlertView from './AlertView'
import ModalView from './View'
import ChooseArticleContent from './ChooseArticleContent'
import ChooseCollectionContent from './ChooseCollectionContent'
import { mountWithTheme } from '../../setupTests'

describe('components/AlertView', () => {
    it('should match snapshot', () => {
        const AlertViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
        }

        const wrapper = mountWithTheme(<AlertView {...AlertViewProps} />)
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/ModalView', () => {
    it('should match snapshot', () => {
        const ModalViewProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
            isModalOpen: true,
        }
        const wrapper = mountWithTheme(
            <ModalView {...ModalViewProps}>
                <div>Test</div>
            </ModalView>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/ChooseArticleContent', () => {
    it('should match snapshot', () => {
        const ChooseArticleContentProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
            isModalOpen: true,
            setRef: jest.fn(),
        }
        const wrapper = mountWithTheme(
            <ChooseArticleContent {...ChooseArticleContentProps}>
                <div>Test</div>
            </ChooseArticleContent>
        )
        expect(wrapper).toMatchSnapshot()
    })
})

describe('components/ChooseCollectionContent', () => {
    it('should match snapshot', () => {
        const ChooseCollectionContentProps = {
            title: 'test',
            content: <div>Test</div>,
            confirmButtonAction: jest.fn(),
            closeModalAction: jest.fn(),
            isModalOpen: true,
            setRef: jest.fn(),
        }
        const wrapper = mountWithTheme(
            <ChooseCollectionContent {...ChooseCollectionContentProps}>
                <div>Test</div>
            </ChooseCollectionContent>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
