import View from './View'
import { shallow } from 'enzyme'

describe('containers/CreateCollectionForm/View', () => {
    it('should match the snapshot', () => {
        const props = {
            communities: [],
            id: '123',
            touched: {
                name: true,
                description: true,
            },
            errors: {},
            values: {
                name: 'test name',
                sections: [],
                tags: [],
            },
            isSubmitting: false,
            setFieldValue: jest.fn(),
            validateForm: jest.fn(),
            showNotificationAction: jest.fn(),
            routeChangeAction: jest.fn(),
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
        const wrapper = shallow(<View {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
