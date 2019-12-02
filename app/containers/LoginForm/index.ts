import { compose } from 'recompose'
import { connect } from 'react-redux'
import { registerAction, IRegisterAction } from './Module'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import { withFormik } from 'formik'
import View from './View'

const mapStateToProps = () => ({
    web3: global.window && !!global.window.web3,
})

interface IProps {
    registerAction: (callback?: any) => IRegisterAction
    callback?: any
}

interface IHandleSumit {
    props: IProps
    resetForm: any
}

export default compose<any, IProps>(
    connect(
        mapStateToProps,
        { registerAction, showNotificationAction }
    ),
    withFormik({
        handleSubmit: async (_values, { props, resetForm }: IHandleSumit) => {
            return props.registerAction(resetForm)
        },
    })
)(View)
