import View from './View'
import { mountWithRedux } from '../../setupTests'
import { MockedProvider } from 'react-apollo/test-utils'
import TertiaryButton from '../../components/Button/TertiaryButton'
import PrimaryButton from '../../components/Button/PrimaryButton'

let wrapper
let props

const routeChangeAction = jest.fn()
const showNotificationAction = jest.fn()
const validateForm = jest.fn()
jest.mock('../../lib/show-form-validation-errors', () =>
    jest.fn().mockImplementation((f1, f2) => {
        f1()
        f2()
    })
)

describe('containers/CreateCollectionForm/View', () => {
    beforeAll(() => {
        props = {
            communities: [],
            id: '123',
            touched: {
                name: true,
                description: true,
            },
            errors: {},
            values: {
                name: 'test name',
                sections: [
                    {
                        resourcesId: [
                            // {
                            //     id: '4e9186353fd848c68c3887effa298d9a',
                            //     type: 'COLLECTION',
                            //     __typename: 'ResourceIdentifier',
                            // },
                            // {
                            //     id: 'c5f31cd6bd464d15aa7c8e10fa35c55f',
                            //     type: 'ARTICLE',
                            //     __typename: 'ResourceIdentifier',
                            // },
                        ],
                    },
                ],
                tags: [],
            },
            isSubmitting: false,
            setFieldValue: jest.fn(),
            validateForm,
            showNotificationAction,
            routeChangeAction,
            openModalAction: jest.fn(),
            editCollectionAction: jest.fn(),
            createCollectionAction: jest.fn(),
            closeModalAction: jest.fn(),
            userId: '234',
            username: '345',
            userAvatar: 'avatar url',
            isLoggedIn: true,
            query: {
                articleId: '789',
                version: '2',
            },
            isValidating: false,
            submitCount: 0,
            setSubmitting: jest.fn(),
            setStatus: jest.fn(),
            setError: jest.fn(),
            setErrors: jest.fn(),
            setTouched: jest.fn(),
            setValues: jest.fn(),
            setFieldError: jest.fn(),
            setFieldTouched: jest.fn(),
            validateField: jest.fn(),
            resetForm: jest.fn(),
            submitForm: jest.fn(),
            setFormikState: jest.fn(),
            handleSubmit: jest.fn(),
            handleReset: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            dirty: false,
            isValid: true,
            initialValues: {
                name: 'test name',
                sections: [],
                tags: [],
            },
            registerField: jest.fn(),
            unregisterField: jest.fn(),
        }
    })
    it('should match the snapshot', () => {
        wrapper = mountWithRedux(
            <MockedProvider>
                <View {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('should handle go back route', () => {
        const tertiaryButtons = wrapper.find(TertiaryButton)
        tertiaryButtons.get(0).props.onClick()
        expect(routeChangeAction).toHaveBeenCalledWith('back')
    })

    it('should check for validation errors', () => {
        const primaryButtons = wrapper.find(PrimaryButton)
        primaryButtons.get(0).props.onClick()
        expect(validateForm).toHaveBeenCalled()
        expect(showNotificationAction).toHaveBeenCalled()
    })

    it('should check for validation errors', () => {
        const primaryButtons = wrapper.find(PrimaryButton)
        primaryButtons.get(0).props.onClick()
        expect(validateForm).toHaveBeenCalled()
        expect(showNotificationAction).toHaveBeenCalled()
    })
})
