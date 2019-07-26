import View from './index'
import { mountWithRedux } from '../../setupTests'
import { Community as mockData } from '../../mocks'
import { getCommunity_getCommunity } from '../../queries/__generated__/getCommunity'
import { MockedProvider } from 'react-apollo/test-utils'

describe('containers/CreateCommunityForm/View', () => {
    const props = {
        id: '123',
        routeChangeAction: jest.fn(),
        createCommunityAction: jest.fn(),
        updateCommunityAction: jest.fn(),
        openModalAction: jest.fn(),
        closeModalAction: jest.fn(),
        data: {
            getCommunity: mockData.data
                .getCommunity as getCommunity_getCommunity,
        },
        userId: '456',
        userAvatar: 'testAvatar',
        username: '345',
        validateForm: jest.fn(),
        showNotificationAction: jest.fn(),
        isCommunityAdmin: false,
        touched: {
            name: true,
            description: true,
        },
        errors: {},
        values: {
            id: '3456',
            name: 'test name',
            description: 'test description',
            avatar: 'test avatar url',
            website: 'test website url',
            tags: [],
        },
        isSubmitting: false,
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
        setFieldValue: jest.fn(),
        dirty: false,
        isValid: true,
        initialValues: {
            id: '3456',
            name: 'test name',
            description: 'test description',
            avatar: 'test avatar url',
            website: 'test website url',
            tags: [],
        },
        registerField: jest.fn(),
        unregisterField: jest.fn(),
    }
    it('should match the snapshot', () => {
        const wrapper = mountWithRedux(
            <MockedProvider>
                <View {...props} />
            </MockedProvider>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
