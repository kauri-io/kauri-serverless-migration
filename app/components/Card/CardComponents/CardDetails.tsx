import { Grid, Typography, Theme } from '@material-ui/core'
import Avatar from '../../Avatar'
import moment from 'moment-mini'
import { makeStyles } from '@material-ui/styles'
import { ResourceIdentifierInput } from '../../../__generated__/globalTypes'

const useStyles = makeStyles((theme: Theme) => ({
    details: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 'auto',
        '& > *': {
            marginRight: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            '& > *': {
                fontSize: 12,
            },
        },
    },
}))

interface IProps {
    user: {
        id: string
        name?: string
        communityName?: string
        username?: string
        avatar?: string
        resourceIdentifier?: ResourceIdentifierInput
    }
    minutes?: number
    date?: string
}

export default ({ user, minutes, date }: IProps) => {
    const classes = useStyles({})

    return (
        <Grid className={classes.details}>
            <Avatar
                id={String(user && user.id)}
                name={user && (user.name || user.communityName)}
                username={user && user.username}
                avatar={user && user.avatar}
                type={
                    user &&
                    user.resourceIdentifier &&
                    user.resourceIdentifier.type
                }
                withName={true}
            />
            {minutes && (
                <Typography variant="body2">{minutes} min read</Typography>
            )}
            {date && (
                <Typography variant="body2">
                    {moment(String(date)).format('DD MMM YY')}
                </Typography>
            )}
        </Grid>
    )
}
