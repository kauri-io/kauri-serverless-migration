import { Card, Typography, Theme, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import TruncateMarkup from 'react-truncate-markup'
import Link from 'next/link'
import TagList from '../Tags/TagList'
import AvatarList from '../AvatarList'
import { searchDiscussions_searchDiscussions_content_contributors_content } from '../../queries/__generated__/searchDiscussions'
import { DiscussionStatusInput } from '../../__generated__/globalTypes'
import moment from 'moment-mini'
import { getDiscussionURL } from '../../lib/getURLs'

interface IProps {
    id: string
    title: string
    tags: (string | null)[] | null
    contributors: {
        totalElements: number
        content: (searchDiscussions_searchDiscussions_content_contributors_content | null)[]
    }
    voteResult: {
        sum: number
    }
    status: DiscussionStatusInput
    comments: {
        totalElements: number
    }
    lastActivity: Date
}

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        width: '100%',
    },
    card: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        textTransform: 'capitalize',
        marginRight: theme.spacing(1),
        wordWrap: 'break-word',
        fontSize: 16,
    },
    column: {
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 88,
        [theme.breakpoints.down('sm')]: {
            width: 70,
        },
    },
    avatarsListMobile: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: theme.spacing(1),
    },
}))

const DiscussionCard = ({
    id,
    title,
    tags,
    contributors,
    voteResult,
    status,
    comments,
    lastActivity,
}: IProps) => {
    const classes = useStyles({})
    const link = getDiscussionURL({ title, id })

    return (
        <Link href={link.href} as={link.as}>
            <a className={classes.link}>
                <>
                    {/* ###### MOBILE VIEW ###### */}
                    <Hidden implementation="css" mdUp={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.left}>
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        className={classes.title}
                                        variant="subtitle2"
                                    >
                                        {title}
                                    </Typography>
                                </TruncateMarkup>
                                <div
                                    onClick={e => {
                                        e.stopPropagation()
                                    }}
                                >
                                    <TagList
                                        color="black"
                                        maxTags={7}
                                        tags={tags}
                                    />
                                </div>
                                <Grid className={classes.avatarsListMobile}>
                                    <AvatarList
                                        list={contributors.content}
                                        total={contributors.totalElements}
                                        limit={3}
                                    />
                                </Grid>
                            </Grid>

                            <Grid className={classes.right}>
                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {comments.totalElements}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {moment(lastActivity).fromNow(true)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Hidden>

                    {/* ###### DESKTOP VIEW ###### */}
                    <Hidden implementation="css" smDown={true}>
                        <Card className={classes.card}>
                            <Grid className={classes.left}>
                                <TruncateMarkup lines={2}>
                                    <Typography
                                        className={classes.title}
                                        variant="h6"
                                    >
                                        {title}
                                    </Typography>
                                </TruncateMarkup>
                                <div
                                    onClick={e => {
                                        e.stopPropagation()
                                    }}
                                >
                                    <TagList
                                        color="black"
                                        maxTags={7}
                                        tags={tags}
                                    />
                                </div>
                            </Grid>

                            <Grid className={classes.right}>
                                <Grid
                                    className={classes.column}
                                    style={{ width: 160 }}
                                >
                                    <AvatarList
                                        list={contributors.content}
                                        total={contributors.totalElements}
                                        limit={3}
                                    />
                                </Grid>

                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {voteResult.sum}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {status}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {comments.totalElements}
                                    </Typography>
                                </Grid>
                                <Grid className={classes.column}>
                                    <Typography variant="subtitle2">
                                        {moment(lastActivity).fromNow(true)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Hidden>
                </>
            </a>
        </Link>
    )
}

export default DiscussionCard
