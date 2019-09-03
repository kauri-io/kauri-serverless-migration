import React from 'react'
import styled from 'styled-components'
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

// import mockData from "./mock";

const HomePageSection = styled.section`
    display: flex;
    flex-direction: column;
    > :nth-last-child(2),
    > :last-child {
        margin-bottom: 0px;
    }
`

const HomePageRow = styled.section<{ padContent: boolean }>`
    display: flex;
    flex-direction: row;
    margin-bottom: ${props => props.theme.space[3]}px;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[3]}px;
    }
    ${props => props.padContent && props.theme.padContent};
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        flex-direction: column;
        > :not(:last-child) {
            margin-right: 0px;
        }
    }
`

const SideRow = styled.section`
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        display: none;
    }
`

interface IProps {
    isLoggedIn: boolean
    data: {
        getLatestHomepageDescriptor: homePageContent_getLatestHomepageDescriptor
    }
    hostName: string
    routeChangeAction: (route: string) => void
    emailSubscribeAction: (emailAddress: string, callback?: any) => void
    showNotificationAction: (payload: IShowNotificationPayload) => void
}

export const HomePageComponent = (props: {
    data: any
    isLoggedIn: boolean
    emailSubscribeAction: (emailAddress: string, callback?: any) => void
    showNotificationAction: (payload: IShowNotificationPayload) => void
    routeChangeAction: any
}) => (
    <HomePageSection>
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
            return (
                <HomePageRow
                    key={index}
                    padContent={Boolean(row && row.main && row.sidebar)}
                >
                    {row &&
                        row.main &&
                        row.main.map(mainRow => {
                            if (mainRow) {
                                switch (mainRow.__typename) {
                                    case 'Categories': {
                                        if (mainRow.content) {
                                            return (
                                                <CuratedCategories
                                                    content={mainRow.content}
                                                />
                                            )
                                        }
                                    }

                                    case 'Featured': {
                                        if (mainRow.content) {
                                            return (
                                                <FeaturedContent
                                                    key="featured-content"
                                                    content={mainRow.content}
                                                />
                                            )
                                        }
                                    }

                                    case 'Promo': {
                                        if (mainRow.__typename === 'Promo') {
                                            if (
                                                mainRow.content &&
                                                mainRow.content.length > 0
                                            ) {
                                                const resource = mainRow.content.map(
                                                    (content: any) => {
                                                        if (content !== null) {
                                                            return content.resource
                                                        }
                                                    }
                                                )

                                                // console.log(resource[0]);

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
                                            }
                                        }
                                    }

                                    case 'LatestContent': {
                                        if (
                                            mainRow.__typename ===
                                            'LatestContent'
                                        ) {
                                            if (
                                                mainRow.content &&
                                                mainRow.content.length > 0
                                            ) {
                                                const content = mainRow.content
                                                return (
                                                    <LatestContent
                                                        key="latest-content"
                                                        content={content}
                                                    />
                                                )
                                            }
                                        }
                                    }

                                    case 'Newsletter': {
                                        if (
                                            mainRow.__typename === 'Newsletter'
                                        ) {
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
                                        }
                                    }

                                    case 'Import': {
                                        if (mainRow.__typename === 'Import') {
                                            return (
                                                <ImportYourContentBanner key="import" />
                                            )
                                        }
                                    }

                                    default: {
                                        return (
                                            <p>
                                                Main row type needs implementing
                                            </p>
                                        )
                                    }
                                }
                            }
                        })}
                    {row &&
                        row.sidebar &&
                        // Filter out latestcontent sidebar
                        row.sidebar.find(sideBar =>
                            sideBar
                                ? sideBar.__typename !== 'LatestContent'
                                : false
                        ) && (
                            <SideRow>
                                {row &&
                                    row.sidebar &&
                                    row.sidebar.map(sideBar => {
                                        if (sideBar) {
                                            switch (sideBar.__typename) {
                                                case 'Actions': {
                                                    return (
                                                        <PublishYourOwnContentCTA
                                                            isLoggedIn={
                                                                props.isLoggedIn
                                                            }
                                                            key={
                                                                sideBar.__typename
                                                            }
                                                            content={
                                                                sideBar.content
                                                            }
                                                        />
                                                    )
                                                }

                                                case 'TopTags': {
                                                    if (sideBar.content) {
                                                        const tags = sideBar.content.map(
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
                                                        sideBar.content &&
                                                        sideBar.__typename ===
                                                            'TopContributors'
                                                    ) {
                                                        if (sideBar.content) {
                                                            const contributors = sideBar.content.map(
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

                                                case 'LatestContent': {
                                                    return null
                                                }

                                                default: {
                                                    return null
                                                }
                                            }
                                        }
                                    })}
                            </SideRow>
                        )}
                </HomePageRow>
            )
        })}
    </HomePageSection>
)

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
