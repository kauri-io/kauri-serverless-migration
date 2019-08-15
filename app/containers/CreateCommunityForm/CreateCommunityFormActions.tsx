import Button from '@material-ui/core/Button'
import showFormValidationErrors from '../../lib/show-form-validation-errors'
import {
    IShowNotificationAction,
    IShowNotificationPayload,
} from '../../lib/Epics/ShowNotificationEpic'
import { useEffect } from 'react'
import initUppy from '../../lib/init-uppy'
import config from '../../config'
import UploadIcon from '@material-ui/icons/CloudUpload'
import { Grid } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

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

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2, 0),
        background: theme.palette.common.black,
    },
    container: {
        maxWidth: 1242,
        margin: 'auto',
    },
    uploadIcon: {
        marginRight: theme.spacing(2),
    },
}))

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
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid className={classes.container} container={true}>
                <Grid sm={6}>
                    <Button
                        color="secondary"
                        variant="text"
                        className="background-upload"
                    >
                        <UploadIcon className={classes.uploadIcon} />
                        Background Image
                    </Button>
                </Grid>

                <Grid sm={6} item={true} container={true} justify="flex-end">
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
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Component
