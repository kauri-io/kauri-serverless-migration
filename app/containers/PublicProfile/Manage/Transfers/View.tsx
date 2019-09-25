import Table from './Table'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import { getArticleTransfers } from '../../../../queries/__generated__/getArticleTransfers'
import withPagination from '../../../../lib/with-pagination'
import Loading from '../../../../components/Loading'
import PublicProfileEmptyState from '../../../../components/PublicProfileEmptyState'

interface IPendingTransfersQuery extends getArticleTransfers {
    loading: boolean
}

interface IProps {
    PendingTransfersQuery: IPendingTransfersQuery
    rejectArticleTransferAction: ({ id }: { id: string }) => void
    acceptArticleTransferAction: ({ id }: { id: string }) => void
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
                <Table
                    acceptArticleTransferAction={
                        props.acceptArticleTransferAction
                    }
                    rejectArticleTransferAction={
                        props.rejectArticleTransferAction
                    }
                    data={transfers}
                />
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

export default withPagination(Transfers, 'getArticleTransfers')
