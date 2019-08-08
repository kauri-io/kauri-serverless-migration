import ActionsSection, {
    MiddleActionsStack,
    RightActionsRow,
} from '../../components/Section/ActionsSection'
import Button from '@material-ui/core/Button'
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
                <Button
                    color="primary"
                    variant="text"
                    className="background-upload"
                >
                    <UploadIcon />
                    Background Image
                </Button>
            </MiddleActionsStack>

            <RightActionsRow>
                <Button
                    color="primary"
                    variant="contained"
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
                </Button>
            </RightActionsRow>
        </ActionsSection>
    )
}

export default Component
