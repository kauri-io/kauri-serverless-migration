// import blockies from 'ethereum-blockies'
import Typography from '@material-ui/core/Typography'
import { Theme, Tooltip } from '@material-ui/core'
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
    newTab?: boolean
    tooltip?: string
    borderRadius?: number
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
    ignoreLink,
    newTab,
    tooltip,
    borderRadius=2
}: IProps) => {
    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatar: {
            marginRight: theme.spacing(1),
            borderRadius: 2,
            height: size || 24,
            width: size || 24,
        },
        username: {
            textTransform: 'capitalize',
            fontWeight: 500,
            [theme.breakpoints.up('xs')]: {
                fontSize: 14,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            },
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
              })

    let AvatarContent = (
        <div className={className || classes.container}>
            {avatar ? (
                <Image
                    className={classes.avatar}
                    image={avatar}
                    width={size || 24}
                    height={size || 24}
                    borderRadius={`${borderRadius}px`}
                />
            ) : (
                <img
                    alt={String(username)}
                    className={classes.avatar}
                    src={makeBlockie(id || ' Anonymous')}
                />
            )}
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
    )

    if (tooltip) {
        AvatarContent = (
            <Tooltip title={tooltip} placement="bottom-end">
                {AvatarContent}
            </Tooltip>
        )
    }

    if (ignoreLink) {
        return AvatarContent
    }

    return (
        <Link as={url.as} href={url.href}>
            <a target={newTab ? '_blank' : '_self'}>{AvatarContent}</a>
        </Link>
    )
}

export default AvatarComp
