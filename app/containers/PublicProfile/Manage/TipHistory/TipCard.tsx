import {
    Grid,
    Typography,
    Card,
    makeStyles,
    Theme,
    Link,
} from '@material-ui/core'
import CardDetails from '../../../../components/Card/CardComponents/CardDetails'
import { getArticleURL } from '../../../../lib/getURLs'
import ButtonComp from '../../../../components/Button'
import EtherScanLink from '../../../../components/Transaction/EtherScanLink'

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'left',
        paddingRight: theme.spacing(2),
    },
    centerColumn: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}))

interface IProps {
    tip: any
    type: 'sent' | 'received'
}

const TipCard = ({ tip, type }: IProps) => {
    const classes = useStyles({})

    const articleUrl = getArticleURL(tip.resource)

    return (
        <Card className={classes.card}>
            <Grid item={true} sm={12} container={true} justify="center">
                <Grid item={true} sm={7} container={true}>
                    <Grid className={classes.column}>
                        <Typography variant="body1" gutterBottom noWrap>
                            {tip.resource.title}
                        </Typography>
                        <CardDetails
                            user={type == 'sent' ? tip.recipient : tip.tipper}
                            date={
                                tip.status == 'PENDING'
                                    ? tip.dateStaged
                                    : tip.dateMined
                            }
                        />
                    </Grid>
                </Grid>
                <Grid item={true} sm={5} container={true}>
                    <Grid
                        className={classes.centerColumn}
                        item={true}
                        sm={4}
                        container={true}
                        justify="center"
                    >
                        <Link href={articleUrl.href} target="_blank">
                            <a>
                                <ButtonComp color="primary">View</ButtonComp>
                            </a>
                        </Link>
                    </Grid>
                    <Grid
                        className={classes.centerColumn}
                        item={true}
                        sm={4}
                        container={true}
                        justify="center"
                    >
                        <Typography>{`${tip.value} ${tip.tokenType}`}</Typography>
                    </Grid>
                    <Grid
                        className={classes.centerColumn}
                        item={true}
                        sm={4}
                        container={true}
                        justify="center"
                    >
                        <EtherScanLink
                            txHash={tip.transactionHash}
                            linkText={tip.status}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default TipCard
