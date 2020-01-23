import React from 'react'
import { getDiscussion_getDiscussion } from '../../queries/__generated__/getDiscussion'
import Loading from '../../components/Loading'
import Community from '../Community'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

interface IProps {
    discussionAction: "list"|"view"|"form"
    discussionId?: string
    parentId?: string
    parentType?: ResourceTypeInput
    data?: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
}

export const DiscussionEntryPoint = ({ discussionId, discussionAction, parentId, parentType, data }: IProps) => {

    if (data && data.loading) {
        return <Loading />
    }

    parentId = parentId || (data && data.getDiscussion.parentId.id) 
    parentType = parentType || (data && data.getDiscussion.parentId.type)

    // This entry point is used to embed the discussion componetns in whatever parent it is associated to.
    if (parentType === ResourceTypeInput.COMMUNITY) {
        return (
            <Community
                communityId={parentId}
                tab={2}
                discussionId={discussionId}
                discussionAction={discussionAction}
            />
        )

    } else {
        return
    }
}

export default DiscussionEntryPoint
