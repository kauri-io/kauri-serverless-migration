import React, { useEffect } from 'react'
import Button from '../../../components/Button'
import ProposeUpdateModal from './ProposeUpdateModal'
import { showNotificationAction } from '../../../lib/Epics/ShowNotificationEpic'
import initUppy from '../../../lib/init-uppy'
import config from '../../../config'
import UploadIcon from '@material-ui/icons/CloudUpload'
import BackIcon from '@material-ui/icons/ArrowLeft'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { IAttributes } from '../View'

export const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            backgroundColor: theme.palette.common.black,
            padding: theme.spacing(2, 0),
        },
        actions: {
            maxWidth: 1272,
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
    showNotificationAction: typeof showNotificationAction
    selectDestination: () => void
    communities: string[]
    setAttributes: (IAttributes) => void
    attributes: IAttributes
    disableActions?: boolean
}

const isOwner = (
    status: string,
    owner: string,
    userId: string,
    communities: any[] | null
) => {
    return (
        memberOfArticleCommunity(communities, owner) ||
        !status ||
        !owner ||
        owner === userId
    )
}

const memberOfArticleCommunity = (communities, articleOwner) => {
    return (
        Array.isArray(communities) &&
        (communities.includes(articleOwner) ||
            communities.find(
                communityRole => communityRole.community.id === articleOwner
            ))
    )
}

let uppy

export default ({
    routeChangeAction,
    handleSubmit,
    userId,
    owner,
    status,
    closeModalAction,
    openModalAction,
    showNotificationAction,
    selectDestination,
    communities,
    setAttributes,
    attributes,
    disableActions,
}: IProps) => {
    useEffect(() => {
        uppy = initUppy({
            allowGifs: false,
        })
        uppy.on('upload-success', (_data, data2) => {
            const background = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            setAttributes({
                background,
                canonical: attributes.canonical,
            })
        })
        uppy.on('complete', function() {
            uppy.reset()
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
                            disabled={disableActions}
                            onClick={handleSubmit('draft') as any}
                        >
                            Save draft
                        </Button>
                        {isOwner(status, owner, userId, communities) ? (
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={disableActions}
                                onClick={selectDestination}
                            >
                                Publish Article
                            </Button>
                        ) : (
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={disableActions}
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
