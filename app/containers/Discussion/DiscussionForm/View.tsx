import React from 'react'
import { makeStyles, Theme, Button } from '@material-ui/core'
import { IRouteChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import {
    IOpenModalAction,
    IOpenModalPayload,
    ICloseModalAction,
} from '../../../components/Modal/Module'
import { ICreateDiscussionAction, IEditDiscussionAction } from '../Module'
import { createDiscussionVariables } from '../../../queries/__generated__/createDiscussion'
import { editDiscussionVariables } from '../../../queries/__generated__/editDiscussion'
import { ResourceTypeInput } from '../../../__generated__/globalTypes'
import { getDiscussion_getDiscussion } from '../../../queries/__generated__/getDiscussion'
import Loading from '../../../components/Loading'
import { getCommunityURL } from '../../../lib/getURLs'
import Link from 'next/link'

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
    discussionId?: string
    parentId: string
    parentName: string
    parentType: ResourceTypeInput
    data?: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: theme.spacing(1),
    },
}))

export const DiscussionForm = ({ parentId, parentName, parentType, discussionId, data }: IProps) => {

    const classes = useStyles()

    if (data && data.loading) {
        return <Loading />
    }

    const back = getCommunityURL({ id: parentId, name: parentName, tab: 2 })

    return (
        <>
            <div className={classes.root}>
                Form 
                - discussionId ={discussionId} 
                - parentId ={parentId} 
                - parentName ={parentName} 
                - parentType ={parentType}
            </div>
            <Link href={back.href} as={back.as}>
                <Button color="primary" variant="text">
                    Back to Topics
                </Button>
            </Link>
        </>


    )
}

export default DiscussionForm
