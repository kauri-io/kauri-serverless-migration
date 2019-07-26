import AlertView from './AlertView'
import ModalView from './View'
import ChooseArticleContent from './ChooseArticleContent'
import ChooseCollectionContent from './ChooseCollectionContent'
import Reducer, {
    openModalAction,
    closeModalAction,
    IModalState,
} from './Module'
import { mountWithTheme } from '../../setupTests'

describe('components/Moda/AlertView', () => {
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

describe('components/Modal/ModalView', () => {
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

describe('components/Modal/ChooseArticleContent', () => {
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

describe('components/Modal/ChooseCollectionContent', () => {
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

describe('components/Modal/Module', () => {
    const initialState: IModalState = {
        isModalOpen: false,
        children: undefined,
    }
    let result = initialState

    it('should set the state to isModalOpen: true and children', () => {
        result = Reducer(
            initialState,
            openModalAction({
                children: <div>Test</div>,
            })
        )
        expect(result).toEqual({
            isModalOpen: true,
            children: <div>Test</div>,
        })
    })

    it('should set the state to isModalOpen: false', () => {
        result = Reducer(initialState, closeModalAction())
        expect(result).toEqual({
            isModalOpen: false,
            children: undefined,
        })
    })
})
