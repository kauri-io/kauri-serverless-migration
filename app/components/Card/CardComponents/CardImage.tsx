import { makeStyles, Theme } from '@material-ui/core'
import Image from '../../Image'

const useStyles = makeStyles((theme: Theme) => ({
    media: {
        [theme.breakpoints.down('sm')]: {
            height: 67,
            width: 67,
            flexShrink: 0,
        },
        [theme.breakpoints.up('sm')]: {
            height: 152,
            width: 152,
            flexShrink: 0,
        },
    },
}))

export default ({ image }) => {
    const classes = useStyles({})
    return image ? (
        <Image
            className={classes.media}
            width={152}
            height={152}
            image={image}
            borderRadius="4px"
        />
    ) : (
        <img
            className={classes.media}
            src="/static/images/DefaultArticle.svg"
        />
    )
}
