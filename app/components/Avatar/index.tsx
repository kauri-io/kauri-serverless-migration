// import blockies from 'ethereum-blockies'
import Typography from '@material-ui/core/Typography'
import { Theme } from '@material-ui/core'
import useridTrim from '../../lib/userid-trim'
import { makeStyles } from '@material-ui/styles'
import makeBlockie from 'ethereum-blockies-base64'

interface IProps {
    id: string
    username?: string | null
    name?: string | null
    avatar?: string | null
    withName: boolean
    className?: string
    size?: number
}

const AvatarComp = ({
    avatar,
    className,
    id,
    name,
    username,
    withName,
    size,
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: size || 24,
        },
        avatar: {
            height: '100%',
            marginRight: theme.spacing(1),
            borderRadius: 2,
        },
        username: {
            textTransform: 'capitalize',
        },
    }))

    const classes = useStyles()
    return (
        <div className={className || classes.container}>
            {avatar ? (
                <img className={classes.avatar} src={avatar} />
            ) : (
                <img className={classes.avatar} src={makeBlockie(id)} />
            )}
            {withName && (
                <Typography className={classes.username} variant="subtitle2">
                    {name || username || useridTrim(id)}
                </Typography>
            )}
        </div>
    )
}

export default AvatarComp
