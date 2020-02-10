import React from 'react'
import { makeStyles, Theme, Grid, Typography, Button } from '@material-ui/core'
import {
    getArticleURL,
    getLinkUrl,
    getCollectionURL,
} from '../../../../lib/getURLs'
import { getCommunityContent_getCommunityContent } from '../../../../queries/__generated__/getCommunityContent'
import { ResourceIdentifierInput } from '../../../../__generated__/globalTypes'
import { Article } from '../../../../queries/Fragments/__generated__/Article'
import CardDetails from '../../../../components/Card/CardComponents/CardDetails'
import Link from 'next/link'
import { Collection } from '../../../../queries/Fragments/__generated__/Collection'
import { UserOwner } from '../../../../queries/Fragments/__generated__/UserOwner'
import { Link as ExternalLink } from '../../../../queries/Fragments/__generated__/Link'
import { approveResourceAction, removeResourceAction } from '../../Module'

interface IProps {
    communityId: string
    data: {
        getCommunityContent: getCommunityContent_getCommunityContent
    }
    approveResourceAction: typeof approveResourceAction
    removeResourceAction: typeof removeResourceAction
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: 'flex',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        border: '1px solid #CBCBCB',
        borderRadius: theme.shape.borderRadius,
        width: '100%',
    },
    left: {
        flexGrow: 1,
    },
    cardTitle: {
        flexGrow: 1,
        margin: theme.spacing(1),
    },
    cardButton: {
        width: '130px',
        padding: theme.spacing(1),
    },
    root: {
        paddingBotton: theme.spacing(4),
        width: '100%',
        maxWidth: 808,
    },
    container: {
        display: 'flex',
        padding: theme.spacing(0, 1),
    },
}))

export const ManageResources = ({
    communityId,
    data,
    approveResourceAction,
    removeResourceAction,
}: IProps) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid container={true} spacing={2}>
                    {data.getCommunityContent.content &&
                    data.getCommunityContent.totalElements > 0 ? (
                        data.getCommunityContent.content.map(
                            (result: any, _index: number) => {
                                const resourceId: ResourceIdentifierInput = {
                                    id: result.id,
                                    type: result.type,
                                }

                                switch (resourceId.type) {
                                    case 'ARTICLE': {
                                        var article = result.resource as Article
                                        var author = article.contributors[0]
                                            ? article.contributors[0]
                                            : article.author

                                        return (
                                            <div className={classes.card}>
                                                <div className={classes.left}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {article.title}
                                                    </Typography>
                                                    <CardDetails
                                                        user={{
                                                            id: author.id,
                                                            username:
                                                                author.username ||
                                                                '',
                                                            name:
                                                                author.name ||
                                                                '',
                                                            avatar:
                                                                author.avatar ||
                                                                '',
                                                        }}
                                                        date={
                                                            article.datePublished
                                                        }
                                                    />
                                                </div>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    {' '}
                                                    <Link
                                                        as={
                                                            getArticleURL({
                                                                ...article,
                                                            }).as
                                                        }
                                                        href={
                                                            getArticleURL({
                                                                ...article,
                                                            }).href
                                                        }
                                                    >
                                                        <a target="_blank">
                                                            View article
                                                        </a>
                                                    </Link>
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        removeResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Reject
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        approveResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Approve
                                                </Button>
                                            </div>
                                        )
                                    }

                                    case 'LINK': {
                                        var link = result.resource as ExternalLink

                                        return (
                                            <div className={classes.card}>
                                                <div className={classes.left}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {link.linkTitle.value}
                                                    </Typography>
                                                    <CardDetails
                                                        user={{
                                                            id:
                                                                link.submitter
                                                                    .id,
                                                            username:
                                                                link.submitter
                                                                    .username ||
                                                                '',
                                                            name:
                                                                link.submitter
                                                                    .name || '',
                                                            avatar:
                                                                link.submitter
                                                                    .avatar ||
                                                                '',
                                                        }}
                                                        date={link.dateCreated}
                                                    />
                                                </div>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    <Link
                                                        as={
                                                            getLinkUrl({
                                                                ...link,
                                                            }).as
                                                        }
                                                        href={
                                                            getLinkUrl({
                                                                ...link,
                                                            }).href
                                                        }
                                                    >
                                                        <a target="_blank">
                                                            View link
                                                        </a>
                                                    </Link>
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        removeResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Reject
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        approveResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Approve
                                                </Button>
                                            </div>
                                        )
                                    }

                                    case 'COLLECTION': {
                                        var collection = result.resource as Collection
                                        var owner = collection.owner as UserOwner

                                        return (
                                            <div className={classes.card}>
                                                <div className={classes.left}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        className={
                                                            classes.cardTitle
                                                        }
                                                    >
                                                        {collection.name}
                                                    </Typography>
                                                    <CardDetails
                                                        user={{
                                                            id: owner.id,
                                                            username:
                                                                owner.username ||
                                                                '',
                                                            name:
                                                                owner.publicUserName ||
                                                                '',
                                                            avatar:
                                                                owner.avatar ||
                                                                '',
                                                        }}
                                                        date={
                                                            collection.dateCreated
                                                        }
                                                    />
                                                </div>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    <Link
                                                        as={
                                                            getCollectionURL({
                                                                ...collection,
                                                            }).as
                                                        }
                                                        href={
                                                            getCollectionURL({
                                                                ...collection,
                                                            }).href
                                                        }
                                                    >
                                                        <a target="_blank">
                                                            View Collection
                                                        </a>
                                                    </Link>
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        removeResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Reject
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    onClick={() =>
                                                        approveResourceAction({
                                                            id: communityId,
                                                            resource: resourceId,
                                                        })
                                                    }
                                                    className={
                                                        classes.cardButton
                                                    }
                                                >
                                                    Approve
                                                </Button>
                                            </div>
                                        )
                                    }
                                    default: {
                                        return null
                                    }
                                }
                            }
                        )
                    ) : (
                        <div style={{ width: '100%' }}>
                            <p>No Pending resources</p>
                        </div>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default ManageResources
