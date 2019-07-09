import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import slugify from 'slugify'
import R from 'ramda'
import CollectionHeader from '../../components/Headers/CollectionHeader'
import CollectionSection from './CollectionSection'
import Link from 'next/link'
import Image from '../../components/Image'
import { recordView } from '../../queries/Utils'

type ICommunity = {
    role: string
    community: {
        id: string
        name: string
        members: Array<{
            id: string
            role: string
        }>
    }
}

type Props = {
    data: {
        getCollection?: CollectionDTO
    }
    proposedCommunityId?: string
    openModalAction: any
    routeChangeAction: (route: string) => void
    hostName: string
    userId?: string
    communities?: ICommunity[]
}

export const Overlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.colors.bgPrimary};
    opacity: 0.8;
    margin-top: -106px;
`

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 ${props => props.theme.padding};
`

const HeaderContainer = styled(ContentContainer)`
    background: ${props => props.theme.colors.bgPrimary};
    background-size: cover;
    flex-wrap: wrap;
    position: relative;
    height: inherit;
    padding: 0;
    margin-top: -76px;
    @media (max-width: 700px) {
        max-height: 90vh;
    }
    @media (min-width: 700px) {
        min-height: 300px;
    }
`

class CollectionPage extends Component<Props> {
    componentDidMount() {
        this.props.client.mutate({
            fetchPolicy: 'no-cache',
            mutation: recordView,
            variables: {
                resourceId: {
                    type: 'COLLECTION',
                    id: this.props.data.getCollection.id,
                },
            },
        })
    }

    render() {
        if (!this.props.data || !this.props.data.getCollection) return null

        const {
            id,
            name,
            background,
            description,
            dateCreated,
            owner,
            tags,
            sections,
        } = this.props.data.getCollection
        const {
            userId,
            routeChangeAction,
            hostName,
            openModalAction,
        } = this.props
        const bg = background && background
        const url = `https://${hostName.replace(/api\./g, '')}/collection/${
            this.props.id
        }/${slugify(name, {
            lower: true,
        })}`

        const resourceType = R.path([
            'data',
            'getCollection',
            'owner',
            'resourceIdentifier',
            'type',
        ])(this.props)

        const isMemberOfCommunityOwner = Boolean(
            resourceType === 'COMMUNITY' &&
                Array.isArray(this.props.communities) &&
                this.props.communities.find(
                    ({ community }) =>
                        community.id === this.props.data.getCollection.owner.id
                )
        )

        return (
            <>
                <Head>
                    <title>{name} - Kauri</title>
                    <meta
                        name="description"
                        content={`${description &&
                            description.slice(0, 151)}...`}
                    />
                    <link rel="canonical" href={url} />
                    <meta property="og:title" content={name} />
                    <meta property="og:site_name" content="kauri.io" />
                    <meta
                        property="og:url"
                        content={`https://${hostName}/article/${id}/${slugify(
                            name,
                            {
                                lower: true,
                            }
                        )}`}
                    />
                    <meta
                        property="og:description"
                        content={`${description &&
                            description.substring(0, 100)}...`}
                    />
                    <meta property="og:type" content="article" />
                    <meta property="og:image" content={bg} />
                    <meta name="twitter:card" content="summary" />
                    <meta
                        name="twitter:site"
                        content={`https://${hostName}/article/${id}/${slugify(
                            name,
                            {
                                lower: true,
                            }
                        )}`}
                    />
                    <meta name="twitter:title" content={name} />
                    <meta
                        name="twitter:description"
                        content={`${description &&
                            description.substring(0, 100)}...`}
                    />
                    <meta name="twitter:creator" content="@kauri_io" />
                    <meta name="twitter:image" content={bg} />
                </Head>
                <ScrollToTopOnMount />
                <HeaderContainer>
                    <Image
                        height="100%"
                        width="100%"
                        overlay={{ opacity: 0.5 }}
                        asBackground
                        image={bg}
                    />
                    <CollectionHeader
                        isMemberOfCommunityOwner={isMemberOfCommunityOwner}
                        imageURL={typeof bg === 'string' ? bg : null}
                        id={id}
                        name={name}
                        description={description || ''}
                        approveArticleAction={this.props.approveArticleAction}
                        proposedCommunityId={this.props.proposedCommunityId}
                        articleCount={sections
                            .map(({ resources }) => resources)
                            .reduce((current, next) => {
                                const articlesInSection = next.filter(
                                    ({ __typename }) =>
                                        __typename === 'ArticleDTO'
                                )
                                if (articlesInSection) {
                                    return current + articlesInSection.length
                                }
                                return current
                            }, 0)}
                        collectionCount={sections
                            .map(({ resources }) => resources)
                            .reduce((current, next) => {
                                const collectionsInSection = next.filter(
                                    ({ __typename }) =>
                                        __typename === 'CollectionDTO'
                                )
                                if (collectionsInSection) {
                                    return current + collectionsInSection.length
                                }
                                return current
                            }, 0)}
                        updated={dateCreated}
                        username={
                            owner &&
                            (owner.__typename === 'CommunityDTO'
                                ? owner.name
                                : owner.username)
                        }
                        ownerId={owner.id}
                        userId={userId || ''}
                        userAvatar={owner && owner.avatar}
                        tags={tags}
                        linkComponent={childrenProps => (
                            <Link
                                fullWidth={false}
                                useAnchorTag
                                href={
                                    resourceType === 'COMMUNITY'
                                        ? `/community/${owner && owner.id}`
                                        : `/public-profile/${owner && owner.id}`
                                }
                            >
                                {childrenProps}
                            </Link>
                        )}
                        url={url}
                        profileImage={owner.profileImage}
                        routeChangeAction={routeChangeAction}
                    />
                </HeaderContainer>
                <ContentContainer>
                    {sections &&
                        sections.map(section => {
                            return (
                                <CollectionSection
                                    key={section.name}
                                    name={section.name}
                                    isLoggedIn={!!this.props.userId}
                                    currentUser={this.props.userId}
                                    description={section.description || ''}
                                    resources={section.resources}
                                    openModalAction={openModalAction}
                                    isOwnedByCurrentUser={
                                        this.props.userId === owner.id
                                    }
                                />
                            )
                        })}
                </ContentContainer>
            </>
        )
    }
}

export default CollectionPage
