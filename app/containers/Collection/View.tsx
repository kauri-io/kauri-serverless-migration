import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { path } from 'ramda'
import CollectionHeader from '../../components/Headers/CollectionHeader'
import CollectionSection from './CollectionSection'
import Image from '../../components/Image'
import { recordViewMutation } from '../../queries/Utils'
import { getCollection } from '../../queries/__generated__/getCollection'
import ApolloClient from 'apollo-client'
import {
    recordView,
    recordViewVariables,
} from '../../queries/__generated__/recordView'
import { approveResourceAction } from '../Community/Module'
import { Article_owner_PublicUserDTO } from '../../queries/Fragments/__generated__/Article'
import { getCollectionURL, getProfileURL } from '../../lib/getURLs'
import Link from 'next/link'
import { openModalAction } from '../../components/Modal/Module'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

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
    @media (max-width: 600px) {
        max-height: 90vh;
    }
    @media (min-width: 600px) {
        height: 360px;
    }
`

function noNullsInArray<T>(items: (T | null)[]) {
    return items.filter((x): x is T => x !== null)
}

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

type IProps = {
    id: string
    data: getCollection
    proposedCommunityId?: string
    openModalAction: typeof openModalAction
    routeChangeAction: typeof routeChangeAction
    userId?: string
    communities?: ICommunity[]
    client: ApolloClient<{}>
    approveResourceAction: typeof approveResourceAction
    isLoggedIn: boolean
}

class CollectionPage extends Component<IProps> {
    componentDidMount() {
        this.props.client.mutate<recordView, recordViewVariables>({
            fetchPolicy: 'no-cache',
            mutation: recordViewMutation,
            variables: {
                resourceId: {
                    id:
                        path<string>(['data', 'getCollection', 'id'])(
                            this.props
                        ) || '',
                    type: 'COLLECTION' as any,
                },
                referrer: window.document.referrer
                    ? window.document.referrer
                    : null,
            },
        })
    }

    render() {
        if (!this.props.data || !this.props.data.getCollection) return null

        if (this.props.data.getCollection) {
            const {
                id,
                name,
                background,
                description,
                dateCreated,
                owner,
                tags,
                sections,
                isBookmarked,
            } = this.props.data.getCollection
            const {
                userId,
                routeChangeAction,
                openModalAction,
                isLoggedIn,
            } = this.props
            const bg = background
            const url = getCollectionURL({ name, id }).as

            const resourceType = path([
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
                            community.id ===
                            (path<string>([
                                'data',
                                'getCollection',
                                'owner',
                                'id',
                            ])(this.props) || '')
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
                        <meta property="og:url" content={url} />
                        <meta
                            property="og:description"
                            content={`${description &&
                                description.substring(0, 100)}...`}
                        />
                        <meta property="og:type" content="article" />
                        {typeof bg === 'string' && (
                            <meta property="og:image" content={bg} />
                        )}
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content={url} />
                        <meta name="twitter:title" content={name} />
                        <meta
                            name="twitter:description"
                            content={`${description &&
                                description.substring(0, 100)}...`}
                        />
                        <meta name="twitter:creator" content="@kauri_io" />
                        {typeof bg === 'string' && (
                            <meta property="twitter:image" content={bg} />
                        )}
                    </Head>
                    <HeaderContainer>
                        {bg && (
                            <Image
                                height="100%"
                                width="100%"
                                overlay={{ opacity: 0.8 }}
                                asBackground
                                image={bg}
                            />
                        )}
                        <CollectionHeader
                            isBookmarked={isBookmarked}
                            isLoggedIn={isLoggedIn}
                            openModalAction={openModalAction}
                            isMemberOfCommunityOwner={isMemberOfCommunityOwner}
                            imageURL={typeof bg === 'string' ? bg : null}
                            id={id}
                            name={name}
                            description={description || ''}
                            approveResourceAction={
                                this.props.approveResourceAction
                            }
                            proposedCommunityId={this.props.proposedCommunityId}
                            articleCount={
                                (sections &&
                                    sections
                                        .map(
                                            section =>
                                                section && section.resources
                                        )
                                        .reduce((current, next) => {
                                            if (next) {
                                                const articlesInSection = next.filter(
                                                    resource =>
                                                        resource &&
                                                        resource.__typename ===
                                                            'ArticleDTO'
                                                )
                                                if (articlesInSection) {
                                                    return (
                                                        current +
                                                        articlesInSection.length
                                                    )
                                                }
                                            }
                                            return current
                                        }, 0)) ||
                                0
                            }
                            collectionCount={
                                (sections &&
                                    sections
                                        .map(
                                            section =>
                                                section && section.resources
                                        )
                                        .reduce((current, next) => {
                                            if (next) {
                                                const collectionsInSection = next.filter(
                                                    resource =>
                                                        resource &&
                                                        resource.__typename ===
                                                            'CollectionDTO'
                                                )
                                                if (collectionsInSection) {
                                                    return (
                                                        current +
                                                        collectionsInSection.length
                                                    )
                                                }
                                            }
                                            return current
                                        }, 0)) ||
                                0
                            }
                            updated={dateCreated}
                            username={
                                owner &&
                                (owner.__typename === 'CommunityDTO'
                                    ? owner.communityName
                                    : (owner as Article_owner_PublicUserDTO)
                                          .username)
                            }
                            type={
                                owner
                                    ? owner.__typename === 'CommunityDTO'
                                        ? ResourceTypeInput.COMMUNITY
                                        : ResourceTypeInput.USER
                                    : ResourceTypeInput.USER
                            }
                            ownerId={(owner && (owner as any).id) || ''}
                            userId={userId || ''}
                            userAvatar={owner && (owner as any).avatar}
                            tags={(tags && noNullsInArray(tags)) || []}
                            linkComponent={childrenProps => (
                                <Link
                                    href={
                                        resourceType === 'COMMUNITY'
                                            ? `/community/${owner &&
                                                  (owner as any).id}`
                                            : getProfileURL(owner as any).href
                                    }
                                >
                                    {childrenProps}
                                </Link>
                            )}
                            url={url}
                            routeChangeAction={routeChangeAction}
                        />
                    </HeaderContainer>
                    <ContentContainer>
                        {sections &&
                            sections.map(section => {
                                if (section) {
                                    return (
                                        <CollectionSection
                                            key={String(section.name)}
                                            name={String(section.name)}
                                            isLoggedIn={!!this.props.userId}
                                            currentUser={this.props.userId}
                                            description={
                                                section.description || ''
                                            }
                                            resources={section.resources as any}
                                            openModalAction={openModalAction}
                                            routeChangeAction={
                                                routeChangeAction
                                            }
                                            isOwnedByCurrentUser={
                                                this.props.userId ===
                                                (owner as any).id
                                            }
                                        />
                                    )
                                }
                            })}
                    </ContentContainer>
                </>
            )
        }
    }
}

export default CollectionPage
