import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import { IRouteChangeAction } from '../../../../lib/Epics/RouteChangeEpic'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../../components/Modal/Module'
import { ICreateDiscussionAction, IEditDiscussionAction } from '../Module'
import { createDiscussionVariables } from '../../../../queries/__generated__/createDiscussion'
import { editDiscussionVariables } from '../../../../queries/__generated__/editDiscussion'

interface IProps {
    routeChangeAction: (payload: string) => IRouteChangeAction
    openModalAction: (payload: IOpenModalPayload) => IOpenModalAction
    closeModalAction: () => ICloseModalAction
    createDiscussionAction: (
        payload: createDiscussionVariables
    ) => ICreateDiscussionAction
    editDiscussionAction: (
        payload: editDiscussionVariables
    ) => IEditDiscussionAction
    communityId: string
    discussionId?: string
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: theme.spacing(1),
    },
}))

export const DiscussionForm = ({  }: IProps) => {
    const classes = useStyles()

    return <div className={classes.root}>Under construction</div>
}

export default DiscussionForm
