import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'
import PublicProfileEmptyState from '../../../../components/PublicProfileEmptyState'
import TipCard from './TipCard'

const useStyles = makeStyles((theme: Theme) => ({
    container: {},
    emptyState: {
        marginTop: theme.spacing(4),
    },
}))

interface IProps {
    tips: any
    type: 'sent' | 'received'
    emptyHeader: string
    emptyText: string
}

const TipList = ({ tips, type, emptyHeader, emptyText }: IProps) => {
    const classes = useStyles({})

    return tips && tips.length > 0 ? (
        <Grid className={classes.container}>
            {tips.map(tip => tip && <TipCard tip={tip} type={type} />)}
        </Grid>
    ) : (
        <Grid className={classes.emptyState}>
            <PublicProfileEmptyState
                iconSrc={'/static/images/icons/no-articles-for-approval.svg'}
                description={
                    <Grid>
                        <Typography>{emptyText}</Typography>
                    </Grid>
                }
                title={emptyHeader}
            />
        </Grid>
    )
}

export default TipList
