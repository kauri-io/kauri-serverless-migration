import Button from '../../components/Button'
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
import BackIcon from '@material-ui/icons/ArrowLeft'

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
        maxWidth: 1272,
        margin: 'auto',
    },
    uploadIcon: {
        marginRight: theme.spacing(2),
    },
}))

let uppy
const Component: React.FunctionComponent<IProps> = props => {
    useEffect(() => {
        uppy = initUppy({
            allowGifs: false,
        })
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            props.setFieldValue('attributes', { background: url })
        })
        uppy.on('complete', function() {
            uppy.reset()
        })
    }, [])
    const classes = useStyles()
    return (
        <Grid className={classes.root}>
            <Grid
                className={classes.container}
                container={true}
                justify="flex-start"
            >
                <Grid sm={4}>
                    <Button
                        color="secondary"
                        variant="text"
                        data-testid={`CreateCommunityForm-back`}
                        onClick={props.goBack}
                    >
                        <BackIcon />
                        Go Back
                    </Button>
                </Grid>

                <Grid
                    sm={4}
                    item={true}
                    container={true}
                    justify="center"
                    alignContent="center"
                >
                    <Button
                        color="secondary"
                        variant="text"
                        className="background-upload"
                        onClick={() => uppy.getPlugin('Dashboard').openModal()}
                    >
                        <UploadIcon className={classes.uploadIcon} />
                        Background Image
                    </Button>
                </Grid>

                <Grid sm={4} item={true} container={true} justify="flex-end">
                    <Button
                        type="submit"
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
