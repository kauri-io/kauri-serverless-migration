import ActionsSection, {
    MiddleActionsStack,
    RightActionsRow,
} from '../../components/Section/ActionsSection'
import PrimaryButtonComponent from '../../components/Button/PrimaryButton'
import TertiaryButtonComponent from '../../components/Button/TertiaryButton'
import UploadIcon from '../../components/Icon/UploadIcon'
import showFormValidationErrors from '../../lib/show-form-validation-errors'
import {
    IShowNotificationAction,
    IShowNotificationPayload,
} from '../../lib/Epics/ShowNotificationEpic'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'

interface IProps {
    id: string | null
    goBack: () => void
    setupImageUploader: () => void
    isSubmitting: boolean
    background: null | string
    validateForm: () => Promise<any>
    showNotificationAction: (
        payload: IShowNotificationPayload
    ) => IShowNotificationAction
    setFieldValue: (field: 'attributes', value: any) => void
}

const Component: React.FunctionComponent<IProps> = props => {
    useEffect(() => {
        const uppy = initUppy({
            allowGifs: false,
            trigger: '.background-upload',
        })
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            props.setFieldValue('attributes', { background: url })
        })
    }, [])
    return (
        <ActionsSection
            bg={
                (typeof props.background === 'string' && 'transparent') ||
                'bgPrimary'
            }
        >
            <MiddleActionsStack>
                <TertiaryButtonComponent
                    icon={<UploadIcon />}
                    className="background-upload"
                >
                    Background Image
                </TertiaryButtonComponent>
            </MiddleActionsStack>

            <RightActionsRow>
                <PrimaryButtonComponent
                    type="submit"
                    disabled={props.isSubmitting}
                    onClick={() =>
                        showFormValidationErrors(
                            props.validateForm,
                            props.showNotificationAction,
                            () => {
                                return
                            }
                        )
                    }
                >
                    {`${props.id ? 'Update' : 'Create'} Community`}
                </PrimaryButtonComponent>
            </RightActionsRow>
        </ActionsSection>
    )
}

export default Component
