import { compose } from 'recompose'
import { connect } from 'react-redux'
import { registerAction, IRegisterAction } from './Module.js'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { withFormik } from 'formik'
import View from './View.js'

export type FormState = {
    email: string
}

const mapStateToProps = () => ({})

interface IProps {
    registerAction: IRegisterAction
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
