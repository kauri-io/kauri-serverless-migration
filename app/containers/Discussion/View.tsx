import React from 'react'
import { getDiscussion_getDiscussion } from '../../queries/__generated__/getDiscussion'
import Loading from '../../components/Loading'
import Community from '../Community'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

interface IProps {
    discussionId: string
    data: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
}

export const DiscussionView = ({ discussionId, data }: IProps) => {
    if (data.loading) {
        return <Loading />
    }

    if (data.getDiscussion.parentId.type === ResourceTypeInput.COMMUNITY) {
        return (
            <Community
                communityId={data.getDiscussion.parentId.id}
                tab={2}
                discussionId={discussionId}
            />
        )
    } else {
        return
    }
}

export default DiscussionView
