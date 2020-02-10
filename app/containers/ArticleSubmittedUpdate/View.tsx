import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ArticleOutline from '../../components/Markdown/Outline'
import Image from '../../components/Image'
import Avatar from '../../components/Avatar'
import MDRenderer from '../../components/Markdown/Renderer'
import { Article } from '../../queries/Fragments/__generated__/Article'
import Hidden from '@material-ui/core/Hidden'
import { ArticleStyles } from '../Article/styles'
import { getArticleURL } from '../../lib/getURLs'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import {
    openModalAction,
    closeModalAction,
} from '../../components/Modal/Module'
import Schema from '../../lib/with-schema'
import estimateTime from '../../lib/estimateTime'
import moment from 'moment-mini'
import { Chip, makeStyles, Theme } from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => {
    return {
        nameAndDate: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: theme.spacing(2),
                paddingTop: theme.spacing(1),
            },
            [theme.breakpoints.down('md')]: {
                paddingTop: theme.spacing(2),
                flexDirection: 'column',
                '& > *': {
                    marginBottom: theme.spacing(1),
                },
            },
        },
    }
})
interface IProps {
    id: string
    classes: any
    data: {
        getArticle: Article
    }
    router: any
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
    closeModalAction: typeof closeModalAction
    userId: string
    user: any
    hostName: string
}

const ArticleSubmittedUpdate = ({
    hostName,
    data: {
        getArticle: {
            dateCreated,
            id,
            contributors,
            content,
            description,
            attributes,
            title,
            tags,
            version,
        },
    },
}: IProps) => {
    const commonClasses = ArticleStyles({})
    const classes = useStyles({})
    const originalAuthor = contributors && contributors[0]

    const url = getArticleURL({ title, id, version }, 'submitted-update')

    return (
        <>
            <Schema
                url={url}
                canonicalURL={attributes.canonical}
                id={id}
                title={title}
                description={description || ''}
                dateCreated={dateCreated}
                datePublished={dateCreated}
                tags={tags}
                background={attributes.background}
                author={originalAuthor}
                hostName={hostName}
            />
            <Grid
                className={commonClasses.root}
                container={true}
                justify="center"
                spacing={3}
            >
                <Hidden smDown={true}>
                    <Grid
                        item={true}
                        sm={2}
                        className={commonClasses.floaterContainer}
                    >
                        <div className={commonClasses.floaterLeft}></div>
                    </Grid>
                </Hidden>
                <Grid
                    className={commonClasses.centralColumn}
                    item={true}
                    xs={12}
                    sm={8}
                    md={8}
                >
                    <div className={commonClasses.header}>
                        <Grid
                            direction="row"
                            container={true}
                            justify="space-between"
                        >
                            <Grid className={classes.nameAndDate}>
                                {originalAuthor && (
                                    <Avatar
                                        avatar={originalAuthor.avatar}
                                        username={originalAuthor.username}
                                        id={originalAuthor.id}
                                        withName={true}
                                    />
                                )}
                                <Typography gutterBottom={true}>
                                    {content && estimateTime(content)} min read
                                    - Submitted{' '}
                                    {moment(dateCreated).format('DD MMM YY')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="inherit" variant="h4" component="h1">
                            {title}
                        </Typography>
                    </div>
                    <div className={commonClasses.headerImage}>
                        {attributes.background && (
                            <Image
                                height={360}
                                width={808}
                                image={attributes.background}
                            />
                        )}
                    </div>
                    <div id="content" className={commonClasses.content}>
                        <MDRenderer markdown={JSON.parse(content).markdown} />
                        <div className={commonClasses.tags}>
                            {tags &&
                                tags.map((text, key) => (
                                    <Link
                                        key={key}
                                        href={`/search-results?q=${text}`}
                                    >
                                        <a>
                                            <Chip
                                                className={commonClasses.tag}
                                                variant="outlined"
                                                label={text}
                                            />
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Grid>
                <Hidden smDown={true}>
                    <Grid item={true} xs={false} sm={2}>
                        <div className={commonClasses.floaterRight}>
                            {process.browser && (
                                <ArticleOutline
                                    markdown={JSON.parse(content).markdown}
                                    withComments={false}
                                    commentsCount={0}
                                />
                            )}
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    )
}
export default ArticleSubmittedUpdate
