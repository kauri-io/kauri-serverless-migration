// import blockies from 'ethereum-blockies'
import Typography from '@material-ui/core/Typography'
import { Theme } from '@material-ui/core'
import useridTrim from '../../lib/userid-trim'
import { makeStyles } from '@material-ui/styles'
import makeBlockie from 'ethereum-blockies-base64'
import Link from 'next/link'
import { getProfileURL, getCommunityURL } from '../../lib/getURLs'
import Image from '../Image'

interface IProps {
    id: string
    username?: string | null
    name?: string | null
    avatar?: string | null
    withName: boolean
    className?: string
    size?: number
    color?: 'primary' | 'secondary'
    type?: string
    ignoreLink?: boolean
}

const AvatarComp = ({
    avatar,
    className,
    id,
    name,
    username,
    withName,
    size,
    color,
    type,
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            marginRight: theme.spacing(1),
        },
        username: {
            textTransform: 'capitalize',
        },
    }))

    const classes = useStyles()
    const url =
        type === 'COMMUNITY'
            ? getCommunityURL({
                  name: String(name),
                  id,
              })
            : getProfileURL({
                  username,
                  id,
              })
    return (
        <Link as={url.as} href={url.href}>
            <a>
                <div className={className || classes.container}>
                        <Image
                            className={classes.avatar}
                            image={avatar ? avatar : makeBlockie(id)}
                            width={size || 24}
                            height={size || 24}
                            borderRadius={'2px'}
                        />
                    {withName && (
                        <Typography
                            color={color}
                            className={classes.username}
                            variant="subtitle2"
                        >
                            {name || username || useridTrim(id)}
                        </Typography>
                    )}
                </div>
            </a>
        </Link>
    )
}

export default AvatarComp
