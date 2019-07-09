import React from 'react'
import { connect } from 'react-redux'
import AdvancedSettingsModal from '../../containers/SubmitArticleForm/AdvancedSettingsModal'
import {
    openModalAction,
    closeModalAction,
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../components/Modal/Module'
import {
    showNotificationAction,
    IShowNotificationPayload,
    IShowNotificationAction,
} from '../Epics/ShowNotificationEpic'

interface IProps {
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
}

const AdvancedSettingsButtonContent = connect(
    () => ({}),
    { openModalAction, closeModalAction, showNotificationAction }
)((props: IProps) => {
    return (
        <li
            className="mde-header-item"
            onClick={() => {
                props.openModalAction({
                    children: (
                        <AdvancedSettingsModal
                            showNotificationAction={
                                props.showNotificationAction
                            }
                            confirmModal={origin_url => {
                                window.setFieldsValue({
                                    attributes: {
                                        ...(window.getFieldsValue([
                                            'attributes',
                                        ]) &&
                                            window.getFieldsValue([
                                                'attributes',
                                            ]).attributes),
                                        origin_url,
                                    },
                                })
                            }}
                            closeModalAction={props.closeModalAction}
                        />
                    ),
                })
            }}
        >
            <button className="fas fa-cog" />
        </li>
    )
})

const advancedModalCommand = {
    buttonContent: <AdvancedSettingsButtonContent />,

    buttonProps: {},

    execute: state =>
        new Promise(resolve => {
            resolve(state)
        }),
}

export default advancedModalCommand
export { advancedModalCommand }
