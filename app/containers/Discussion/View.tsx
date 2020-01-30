import React from 'react'
import { getDiscussion_getDiscussion } from '../../queries/__generated__/getDiscussion'
import Loading from '../../components/Loading'
import Community from '../Community'
import { ResourceTypeInput } from '../../__generated__/globalTypes'
import Schema from '../../lib/with-schema'
import { getDiscussionURL } from '../../lib/getURLs'

interface IProps {
    hostName: string
    discussionAction: 'list' | 'view' | 'form'
    discussionId?: string
    parentId?: string
    parentType?: ResourceTypeInput
    data?: {
        loading: boolean
        getDiscussion: getDiscussion_getDiscussion
    }
}

export const DiscussionEntryPoint = ({
    hostName,
    discussionId,
    discussionAction,
    parentId,
    parentType,
    data,
}: IProps) => {
    if (data && data.loading) {
        return <Loading />
    }

    parentId = parentId || (data && data.getDiscussion.parentId.id)
    parentType = parentType || (data && data.getDiscussion.parentId.type)

    const id = data && data.getDiscussion.id
    const title = data && data.getDiscussion.title
    const url = getDiscussionURL({ id, title })

    // This entry point is used to embed the discussion componetns in whatever parent it is associated to.
    if (parentType === ResourceTypeInput.COMMUNITY) {
        return (
            <>
                <Schema
                    type="Discussion"
                    url={url}
                    id={(data && data.getDiscussion.id) || ''}
                    title={(data && data.getDiscussion.title) || ''}
                    description={(data && data.getDiscussion.message) || ''}
                    dateCreated={data && data.getDiscussion.dateCreated}
                    datePublished={data && data.getDiscussion.dateCreated}
                    tags={(data && data.getDiscussion.tags) || []}
                    author={data && data.getDiscussion.author}
                    hostName={hostName}
                />

                <Community
                    communityId={parentId}
                    tab={2}
                    discussionId={discussionId}
                    discussionAction={discussionAction}
                />
            </>
        )
    } else {
        return
    }
}

export default DiscussionEntryPoint
