import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import ProposeUpdateModal from './ProposeUpdateModal'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import initUppy from '../../lib/init-uppy'
import config from '../../config'
import UploadIcon from '@material-ui/icons/CloudUpload'
import BackIcon from '@material-ui/icons/ArrowLeft'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            backgroundColor: theme.palette.common.black,
            padding: theme.spacing(2, 0),
        },
        actions: {
            maxWidth: 1242,
            margin: 'auto',
        },
        buttons: {
            '& button': {
                marginLeft: theme.spacing(2),
            },
        },
        uploadIcon: {
            marginRight: theme.spacing(2),
        },
    }
})

interface IProps {
    routeChangeAction: (route: string) => void
    handleSubmit: (submissionType: string, updateComment?: string) => void
    userId: string
    openModalAction: (children: any) => void
    closeModalAction: () => void
    owner: string
    status: string
    getFieldDecorator: (field: string, arg1?: any) => any
    setFieldsValue: ({ attributes: { background: string } }) => void
    showNotificationAction: typeof showNotificationAction
    selectDestination: () => void
    communities: string[]
}

const isOwner = (
    status: string,
    owner: string,
    userId: string,
    communities: string[] | null
) =>
    (Array.isArray(communities) && communities.includes(owner)) ||
    !status ||
    !owner ||
    owner === userId

let uppy

export default ({
    routeChangeAction,
    handleSubmit,
    userId,
    owner,
    status,
    setFieldsValue,
    getFieldDecorator,
    closeModalAction,
    openModalAction,
    showNotificationAction,
    selectDestination,
    communities,
}: IProps) => {
    useEffect(() => {
        uppy = initUppy({
            allowGifs: false,
        })
        getFieldDecorator('attributes')
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            setFieldsValue({
                attributes: {
                    background: url,
                },
            })
        })
    }, [])

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Grid className={classes.actions} container={true}>
                <Grid item={true} sm={4}>
                    <Button
                        color="secondary"
                        variant="text"
                        onClick={() => routeChangeAction('back')}
                    >
                        <BackIcon />
                        <span>Go Back</span>
                    </Button>
                </Grid>
                <Grid justify="center" container={true} item={true} sm={4}>
                    <Button
                        color="secondary"
                        className="background-upload"
                        variant="text"
                        onClick={() => uppy.getPlugin('Dashboard').openModal()}
                    >
                        <UploadIcon className={classes.uploadIcon} />
                        Upload Background
                    </Button>
                </Grid>
                <Grid className={classes.buttons} sm={4} item={true}>
                    <Grid container={true} justify="flex-end">
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={handleSubmit('draft') as any}
                        >
                            Save draft
                        </Button>
                        {isOwner(status, owner, userId, communities) ? (
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={selectDestination}
                            >
                                Publish Article
                            </Button>
                        ) : (
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() =>
                                    openModalAction({
                                        children: (
                                            <ProposeUpdateModal
                                                closeModalAction={() =>
                                                    closeModalAction()
                                                }
                                                confirmModal={handleSubmit}
                                                showNotificationAction={
                                                    showNotificationAction
                                                }
                                            />
                                        ),
                                    })
                                }
                            >
                                Propose Update
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
