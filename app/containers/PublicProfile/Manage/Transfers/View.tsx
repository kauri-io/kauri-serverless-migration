import {
    Grid,
    TableRow,
    TableCell,
    Typography,
    TableHead,
    TableBody,
    makeStyles,
    Theme,
    Table,
} from '@material-ui/core'
import { getArticleTransfers } from '../../../../queries/__generated__/getArticleTransfers'
import Loading from '../../../../components/Loading'
import PublicProfileEmptyState from '../../../../components/PublicProfileEmptyState'
import {
    rejectArticleTransferAction,
    acceptArticleTransferAction,
} from '../TransferModule'
import Link from '../../../../components/Link'
import { getProfileURL, getArticleURL } from '../../../../lib/getURLs'

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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>Status</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Sent By</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Article Name</Typography>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transfers &&
                            transfers.map((i: any) => {
                                if (i === null) return

                                const articleUrl = getArticleURL(i.article)
                                const ownerUrl = getProfileURL(i.article.owner)
                                return (
                                    <TableRow key={i.id}>
                                        <TableCell>
                                            <Typography>Pending</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                href={ownerUrl.href}
                                                as={ownerUrl.href}
                                            >
                                                <Typography>
                                                    {i.article.owner.name ||
                                                        i.article.owner
                                                            .username ||
                                                        i.article.owner.id}
                                                </Typography>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                href={articleUrl.href}
                                                as={articleUrl.as}
                                            >
                                                <Typography>
                                                    {i.article.title}
                                                </Typography>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                onClick={() =>
                                                    props.acceptArticleTransferAction(
                                                        {
                                                            id: i.id,
                                                        }
                                                    )
                                                }
                                            >
                                                Accept
                                            </Typography>
                                            <Typography
                                                onClick={() =>
                                                    props.rejectArticleTransferAction(
                                                        {
                                                            id: i.id,
                                                        }
                                                    )
                                                }
                                            >
                                                Reject
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
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
