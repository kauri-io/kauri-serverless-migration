import React from 'react'
import { getDiscussion_getDiscussion } from '../../queries/__generated__/getDiscussion'
import Loading from '../../components/Loading'
import Community from '../Community'
import { ResourceTypeInput } from '../../__generated__/globalTypes'
import Head from 'next/head'
import { getDiscussionURL } from '../../lib/getURLs'

interface IProps {
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
    const description = `${data && data.getDiscussion.message.slice(0, 151)}...`
    const url = getDiscussionURL({ id, title })

    // This entry point is used to embed the discussion componetns in whatever parent it is associated to.
    if (parentType === ResourceTypeInput.COMMUNITY) {
        return (
            <>
            <Head>
                <title
                    dangerouslySetInnerHTML={{
                        __html: `${title} - Discussion - Kauri`,
                    }}
                />
                <meta name="description" content={description} />
                <link rel="canonical" href={url.as} />
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="kauri.io" />
                <meta property="og:url" content={url.as} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="discussion" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={url.as} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:creator" content="@kauri_io" />
            </Head>
            
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
