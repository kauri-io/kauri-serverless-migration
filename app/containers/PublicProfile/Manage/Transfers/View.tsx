import { Grid, Typography, makeStyles, Theme, Button } from '@material-ui/core'
import { getArticleTransfers } from '../../../../queries/__generated__/getArticleTransfers'
import Loading from '../../../../components/Loading'
import PublicProfileEmptyState from '../../../../components/PublicProfileEmptyState'
import {
    rejectArticleTransferAction,
    acceptArticleTransferAction,
} from '../TransferModule'
import Link from 'next/link'
import { getArticleURL } from '../../../../lib/getURLs'
import {
    Article,
    Article_owner_PublicUserDTO,
    Article_owner_CommunityDTO,
} from '../../../../queries/Fragments/__generated__/Article'
import { path } from 'ramda'
import CardDetails from '../../../../components/Card/CardComponents/CardDetails'
import { ResourceTypeInput } from '../../../../__generated__/globalTypes'

interface IPendingTransfersQuery extends getArticleTransfers {
    loading: boolean
}

interface IProps {
    PendingTransfersQuery: IPendingTransfersQuery
    rejectArticleTransferAction: typeof rejectArticleTransferAction
    acceptArticleTransferAction: typeof acceptArticleTransferAction
}

const Transfers: React.FC<IProps> = props => {
    if (props.PendingTransfersQuery.loading) {
        return <Loading />
    }

    const transfers =
        props.PendingTransfersQuery.getArticleTransfers &&
        props.PendingTransfersQuery.getArticleTransfers.content

    const useStyles = makeStyles((theme: Theme) => ({
        table: {
            margin: theme.spacing(2),
        },
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
    }))

    const classes = useStyles()

    if (transfers) {
        return transfers.length > 0 ? (
            <Grid className={classes.table}>
                <Typography variant="h5">
                    Ownership Transfers Requests
                </Typography>
                <Typography>
                    Pending transfer requests appear here. By accepting, you
                    will gain full control over the content of the transferred
                    article. Rejecting will remove it from the queue.
                </Typography>

                {transfers &&
                    transfers.map((obj: any) => {
                        if (obj === null) return
                        const article = path<Article>(['article'])(
                            obj
                        ) as Article
                        const ownerType = path<ResourceTypeInput>([
                            'article',
                            'owner',
                            'resourceIdentifier',
                            'type',
                        ])(obj) as ResourceTypeInput

                        var owner
                        if (ownerType === ResourceTypeInput.USER) {
                            owner = path<Article_owner_PublicUserDTO>([
                                'owner',
                            ])(article) as Article_owner_PublicUserDTO
                        } else if (ownerType === ResourceTypeInput.COMMUNITY) {
                            owner = path<Article_owner_CommunityDTO>(['owner'])(
                                article
                            ) as Article_owner_CommunityDTO
                        } else {
                            return
                        }

                        return (
                            <div className={classes.card}>
                                <div className={classes.left}>
                                    <Typography
                                        variant="subtitle1"
                                        className={classes.cardTitle}
                                    >
                                        {article.title}
                                    </Typography>
                                    <CardDetails
                                        user={{ ...owner }}
                                        date={article.datePublished}
                                    />
                                </div>
                                <Button
                                    color="primary"
                                    variant="text"
                                    className={classes.cardButton}
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
                                        <a target="_blank">View article</a>
                                    </Link>
                                </Button>
                                <Button
                                    color="primary"
                                    variant="text"
                                    onClick={() =>
                                        props.rejectArticleTransferAction({
                                            id: article.id,
                                        })
                                    }
                                    className={classes.cardButton}
                                >
                                    Reject
                                </Button>
                                <Button
                                    color="primary"
                                    variant="text"
                                    onClick={() =>
                                        props.acceptArticleTransferAction({
                                            id: article.id,
                                        })
                                    }
                                    className={classes.cardButton}
                                >
                                    Approve
                                </Button>
                            </div>
                        )
                    })}
            </Grid>
        ) : (
            <Grid>
                <PublicProfileEmptyState
                    iconSrc={
                        '/static/images/icons/no-articles-for-approval.svg'
                    }
                    description={
                        <Grid>
                            <Typography>
                                You don't have any pending ownership transfers
                                at the moment.
                            </Typography>
                        </Grid>
                    }
                    title="Ownership Transfers Requests"
                />
            </Grid>
        )
    }
    return null
}

export default Transfers
