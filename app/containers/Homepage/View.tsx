import React from 'react'
import { homePageContentQuery as query } from '../../queries/Homepage'
import {
    homePageContent,
    homePageContent_getLatestHomepageDescriptor,
} from '../../queries/__generated__/homePageContent'
import { Query } from 'react-apollo'
import Loading from '../../components/Loading'
import { ErrorMessage } from '../../lib/with-apollo-error'
import SignupBanner from '../../components/SignupBanner'
import PublishYourOwnContentCTA from '../../components/PublishYourOwnContentCTA'
import TopTags from '../../components/TopTags'
import TopContributors from '../../components/TopContributors'
import FeaturedContent from '../../components/FeaturedContent'
import LatestContent from '../../components/LatestContent'
import NewsletterBanner from '../../components/NewsletterBanner'
import ImportYourContentBanner from '../../components/ImportYourContentBanner'
import FeaturedResource from '../../components/FeaturedResource'
import CuratedCategories from '../../components/CuratedCategories'
import { IShowNotificationPayload } from '../../lib/Epics/ShowNotificationEpic'
import Head from 'next/head'
import { Grid, Theme, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { openModalAction } from '../../components/Modal/Module'

interface IProps {
    isLoggedIn: boolean
    data: {
        getLatestHomepageDescriptor: homePageContent_getLatestHomepageDescriptor
    }
    hostName: string
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
    emailSubscribeAction: (emailAddress: string, callback?: any) => void
    showNotificationAction: (payload: IShowNotificationPayload) => void
}

export const HomePageComponent = (props: {
    data: any
    isLoggedIn: boolean
    emailSubscribeAction: (emailAddress: string, callback?: any) => void
    showNotificationAction: (payload: IShowNotificationPayload) => void
    routeChangeAction: typeof routeChangeAction
    openModalAction: typeof openModalAction
}) => {
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            width: '100%',
            background: theme.palette.common.white,
        },
        section: {
            maxWidth: 1242,
            width: '100%',
            margin: 'auto',
        },
        sidebar: {},
    }))
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>
                    Beginner to Advanced Blockchain & Ethereum Tutorials - Kauri
                </title>
                <meta property="og:url" content="https://kauri.io" />
                <meta
                    property="og:image"
                    content="https://api.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY"
                />
                <meta
                    name="description"
                    content={
                        'Learn Blockchain and Ethereum with Kauri, Articles, Tutorials, Guides, Documentation and Best Practices. Focused on Getting Started, Scaling, Privacy, Storage, Defi, Gaming, UX and much more.'
                    }
                />
            </Head>

            {!props.isLoggedIn && <SignupBanner />}

            {props.data.getLatestHomepageDescriptor.rows.map((row, index) => {
                const hasSidebar = row.sidebar !== null
                return (
                    <Grid container={true} className={classes.root} key={index}>
                        <Grid
                            container={true}
                            className={classes.section}
                            spacing={2}
                        >
                            <Grid item={true} md={hasSidebar ? 9 : 12}>
                                {row.main.map(main => {
                                    switch (main.type) {
                                        case 'CATEGORIES':
                                            return (
                                                <CuratedCategories
                                                    content={main.content}
                                                    key="CATEGORIES"
                                                />
                                            )
                                        case 'PROMO':
                                            const resource = main.content.map(
                                                (content: any) => {
                                                    if (content !== null) {
                                                        return content.resource
                                                    }
                                                }
                                            )

                                            return (
                                                <FeaturedResource
                                                    key="featured-resource"
                                                    {...resource[0]}
                                                    {...resource[0].owner}
                                                    id={resource[0].id}
                                                    userId={
                                                        resource[0].owner.id
                                                    }
                                                    resourceType={resource[0].resourceIdentifier.type.toLowerCase()}
                                                    ownerResourceType={resource[0].owner.resourceIdentifier.type.toLowerCase()}
                                                />
                                            )

                                        case 'FEATURED':
                                            return (
                                                <FeaturedContent
                                                    key="featured-content"
                                                    content={main.content}
                                                />
                                            )

                                        case 'LATEST_CONTENT':
                                            const content = main.content
                                            return (
                                                <LatestContent
                                                    key="latest-content"
                                                    content={content}
                                                />
                                            )

                                        default:
                                            return null
                                    }
                                })}
                            </Grid>

                            {hasSidebar && (
                                <Hidden smDown={true}>
                                    <Grid
                                        className={classes.sidebar}
                                        item={true}
                                        sm={3}
                                        container={true}
                                        spacing={2}
                                        direction="column"
                                    >
                                        {row.sidebar.map(sidebar => {
                                            switch (sidebar.__typename) {
                                                case 'Actions': {
                                                    return (
                                                        <PublishYourOwnContentCTA
                                                            isLoggedIn={
                                                                props.isLoggedIn
                                                            }
                                                            key={
                                                                sidebar.__typename
                                                            }
                                                            content={
                                                                sidebar.content
                                                            }
                                                        />
                                                    )
                                                }

                                                case 'TopTags': {
                                                    if (sidebar.content) {
                                                        const tags = sidebar.content.map(
                                                            tag =>
                                                                (tag &&
                                                                    tag.tagName) ||
                                                                ''
                                                        )

                                                        return (
                                                            <TopTags
                                                                key={'top tags'}
                                                                routeChangeAction={
                                                                    props.routeChangeAction
                                                                }
                                                                tags={
                                                                    tags as string[]
                                                                }
                                                            />
                                                        )
                                                    }
                                                }

                                                case 'TopContributors': {
                                                    if (
                                                        sidebar.content &&
                                                        sidebar.__typename ===
                                                            'TopContributors'
                                                    ) {
                                                        if (sidebar.content) {
                                                            const contributors = sidebar.content.map(
                                                                contributor =>
                                                                    (contributor &&
                                                                        contributor.user && {
                                                                            avatar:
                                                                                contributor
                                                                                    .user
                                                                                    .avatar,
                                                                            userId: String(
                                                                                contributor
                                                                                    .user
                                                                                    .id
                                                                            ),
                                                                            username:
                                                                                contributor
                                                                                    .user
                                                                                    .username,
                                                                        }) || {
                                                                        avatar:
                                                                            '',
                                                                        userId:
                                                                            '',
                                                                        username:
                                                                            '',
                                                                    }
                                                            )

                                                            return (
                                                                <TopContributors
                                                                    key={
                                                                        'top contributors'
                                                                    }
                                                                    contributors={
                                                                        contributors
                                                                    }
                                                                />
                                                            )
                                                        }
                                                    }
                                                }
                                            }
                                        })}
                                    </Grid>
                                </Hidden>
                            )}
                        </Grid>
                    </Grid>
                )
            })}

            {props.data.getLatestHomepageDescriptor.rows.map((row, index) => {
                return (
                    <Grid container={true} className={classes.root} key={index}>
                        <Grid item={true} sm={12}>
                            {row.main.map(main => {
                                switch (main.type) {
                                    case 'NEWSLETTER':
                                        return (
                                            <NewsletterBanner
                                                key="newsletter-banner"
                                                handleSubmit={emailAddress =>
                                                    props.emailSubscribeAction(
                                                        emailAddress
                                                    )
                                                }
                                                handleError={() => {
                                                    props.showNotificationAction(
                                                        {
                                                            description:
                                                                'Please enter a valid email address!',
                                                            message:
                                                                'Invalid Email address',
                                                            notificationType:
                                                                'error',
                                                        }
                                                    )
                                                }}
                                            />
                                        )

                                    case 'IMPORT':
                                        return (
                                            <ImportYourContentBanner key="import" />
                                        )

                                    default:
                                        return null
                                }
                            })}
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}

const HomePageComponentWrapper: React.FunctionComponent<IProps> = props => {
    return (
        <Query<homePageContent> query={query}>
            {({ loading, error, data }) => {
                // console.log(error)
                if (loading) {
                    return <Loading />
                }
                if (error) {
                    return (
                        <ErrorMessage
                            data={{ error: { message: error.message } }}
                        />
                    )
                }
                if (data) {
                    return <HomePageComponent {...props} data={data} />
                } else {
                    return null
                }
            }}
        </Query>
    )
}

export default HomePageComponentWrapper
