import Table from './Table'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import { getArticleTransfers } from '../../../../queries/__generated__/getArticleTransfers'
import withPagination from '../../../../lib/with-pagination'

interface IProps {
    PendingTransfersQuery: getArticleTransfers
    rejectArticleTransferAction: ({ id }: { id: string }) => void
    acceptArticleTransferAction: ({ id }: { id: string }) => void
}

// export interface ITransfer {
//     id: string
//     transferrer: {
//         username: string
//         id: string
//     }
//     article: {
//         id: string
//         title: string
//         owner: {
//             name: string
//             username: string
//             id: string
//         }
//     }
// }

const Transfers: React.FC<IProps> = props => {
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
            <Grid className={classes.table}>
                <Typography variant="h5">
                    Ownership Transfers Requests
                </Typography>
                <Typography>No transfers</Typography>
            </Grid>
        )
    }
    return null
}

export default withPagination(Transfers, 'getArticleTransfers')
