import Table from './Table'
import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'

interface IProps {
    data: ITransfer[]
    rejectArticleTransferAction: ({ id }: { id: string }) => void
    acceptArticleTransferAction: ({ id }: { id: string }) => void
}

export interface ITransfer {
    id: string
    transferrer: {
        username: string
        id: string
    }
    article: {
        id: string
        title: string
        owner: {
            name: string
            username: string
            id: string
        }
    }
}

const Transfers = (props: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        table: {
            margin: theme.spacing(2),
        },
    }))
    const classes = useStyles()
    return (
        <Grid className={classes.table}>
            <Typography variant="h5">Ownership Transfers Requests</Typography>
            <Typography>
                Pending transfer requests appear here. By accepting, you will
                gain full control over the content of the transferred article.
                Rejecting will remove it from the queue.
            </Typography>
            <Table
                acceptArticleTransferAction={props.acceptArticleTransferAction}
                rejectArticleTransferAction={props.rejectArticleTransferAction}
                data={props.data}
            />
        </Grid>
    )
}

export default Transfers
