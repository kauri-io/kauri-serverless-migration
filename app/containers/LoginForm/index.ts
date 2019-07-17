import { compose } from 'recompose'
import { connect } from 'react-redux'
import {
    registerAction,
    IRegisterAction,
    IRegisterActionPayload,
} from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { withFormik } from 'formik'
import View from './View'

export type FormState = {
    email: string
}

const mapStateToProps = () => ({})

interface IProps {
    registerAction: (payload: IRegisterActionPayload) => IRegisterAction
    callback?: any
}

interface IHandleSumit {
    props: IProps
    resetForm: any
}

export default compose(
    connect(
        mapStateToProps,
        { registerAction, showNotificationAction }
    ),
    withFormik({
        mapPropsToValues: () => ({}),
        handleSubmit: async (
            values: FormState,
            { props, resetForm }: IHandleSumit
        ) => {
            console.log(props)
            console.log('Received values of form: ', values)
            return props.registerAction({ ...values }, resetForm)
        },
    })
)(View)
