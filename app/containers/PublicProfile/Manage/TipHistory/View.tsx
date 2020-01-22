import {
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    makeStyles,
    Theme,
} from '@material-ui/core'
import withPagination from '../../../../lib/with-pagination'
//import { getTips } from '../../../../queries/__generated__/getTips';
import { useState } from 'react'
import TipList from './TipList'
import { getTips } from '../../../../queries/__generated__/getTips'
import LoadingComponent from '../../../../components/Loading'

interface IGetTipsQuery extends getTips {
    loading: boolean
}

interface IProps {
    receivedTipsQuery: IGetTipsQuery
    sentTipsQuery: IGetTipsQuery
}

//const TipHistory: React.FC<IProps> = props => {
const TipHistory = (props: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        select: {
            minWidth: 140,
        },
        headerText: {
            marginBottom: theme.spacing(2),
        },
        listHeaders: {
            paddingRight: theme.spacing(2),
        },
        listHeader: {
            textAlign: 'center',
        },
        selectFont: {
            fontSize: '0.875rem',
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
    }))

    const classes = useStyles({})

    const [selectedTips, setSelectedTips] = useState('received')

    if (props.sentTipsQuery.loading) {
        return <LoadingComponent />
    }

    const sentTips =
        props.sentTipsQuery.getTips && props.sentTipsQuery.getTips.content
            ? props.sentTipsQuery.getTips.content
            : []

    const receivedTips =
        props.receivedTipsQuery.getTips &&
        props.receivedTipsQuery.getTips.content
            ? props.receivedTipsQuery.getTips.content
            : []

    const handleChange = event => {
        setSelectedTips(event.target.value)
    }

    const getTips = () => {
        if (selectedTips === 'sent') {
            return sentTips
        }

        return receivedTips
    }

    return (
        <Grid>
            <Grid className={classes.headerText}>
                <Typography variant="h5">Tip History</Typography>
                <Typography variant="subtitle1">
                    The history of tips received and sent.
                </Typography>
            </Grid>

            <Grid sm={12} container={true}>
                <Grid sm={7} container={true}>
                    <FormControl className={classes.select}>
                        <Select
                            id="demo-simple-select"
                            value={selectedTips}
                            onChange={handleChange}
                            inputProps={{
                                className: classes.selectFont,
                            }}
                        >
                            <MenuItem value="received">TIPS RECEIVED</MenuItem>
                            <MenuItem value="sent">TIPS SENT</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {getTips() && getTips().length > 0 && (
                    <Grid
                        sm={5}
                        container={true}
                        className={classes.listHeaders}
                    >
                        <Grid sm={4}></Grid>
                        <Grid sm={4} className={classes.listHeader}>
                            <Typography variant="button">AMOUNT</Typography>
                        </Grid>
                        <Grid sm={4} className={classes.listHeader}>
                            <Typography variant="button">STATUS</Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>

            <TipList
                tips={getTips()}
                type={selectedTips as 'sent' | 'received'}
                emptyHeader={
                    selectedTips === 'sent' ? 'Tips Sent' : 'Tips Received'
                }
                emptyText={
                    selectedTips === 'sent'
                        ? "You haven't sent any tips at the moment."
                        : "You haven't received any tips at the moment."
                }
            />
        </Grid>
    )
}

export default withPagination(TipHistory, 'getTips')
