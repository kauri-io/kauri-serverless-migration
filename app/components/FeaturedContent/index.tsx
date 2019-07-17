import styled from 'styled-components'
import ResourceRow from '../SearchResults/ResourceRowWithImage' // IProps as ResourceRowProps,
import { Title2 } from '../Typography'
import { RenderCardContent } from '../CuratedLists'
import theme from '../../lib/theme-config'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0px;
    > :first-child {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        > h3 {
            padding: 0px ${props => props.theme.space[2]}px;
        }
    }
`

const ResourceContainer = styled(Container)`
    padding: 0px;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        align-items: center;
    }
`

const DesktopResourceContainer = styled(ResourceContainer)`
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        display: none;
    }
`

const MobileResourceContainer = styled(ResourceContainer)`
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
        display: grid;
        width: 100vw;
        > :not(:first-child) {
            justify-content: center;
        }
        grid-template-columns: repeat(
            auto-fill,
            minmax(${DEFAULT_CARD_WIDTH}px, ${DEFAULT_CARD_WIDTH}px)
        );
        grid-gap: ${props => props.theme.space[2]}px
            ${props => props.theme.space[3]}px;
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        justify-content: center;
    }
    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        display: none;
    }
`

interface IProps {
    content: any[]
    Link: React.ReactNode
}

const RenderMobileFeaturedContent: React.FunctionComponent<IProps> = props => {
    return (
        <MobileResourceContainer>
            {props.content.map(({ resource }) => {
                const articleCount =
                    resource.sections &&
                    resource.sections.reduce((current: number, next: any) => {
                        if (next && Array.isArray(next.resources)) {
                            const articlesInSection = next.resources.filter(
                                (sectionResource: any) => {
                                    return (
                                        sectionResource &&
                                        sectionResource.__typename
                                            .toLowerCase()
                                            .includes('article')
                                    )
                                }
                            )
                            return articlesInSection.length + current
                        }
                        return current
                    }, 0)

                const collectionCount =
                    resource.sections &&
                    resource.sections.reduce((current: number, next: any) => {
                        if (next && Array.isArray(next.resources)) {
                            const collectionsInSection = next.resources.filter(
                                (sectionResource: any) =>
                                    sectionResource &&
                                    sectionResource.__typename
                                        .toLowerCase()
                                        .includes('collection')
                            )
                            return collectionsInSection.length + current
                        }
                        return current
                    }, 0)

                const RenderedCard = RenderCardContent({
                    Link: props.Link,
                    fromAdmin: false,
                })

                return (
                    <RenderedCard
                        {...resource}
                        articleCount={articleCount}
                        collectionCount={collectionCount}
                    />
                )
            })}
        </MobileResourceContainer>
    )
}

const RenderDesktopFeaturedContent: React.FunctionComponent<
    IProps & { Link: React.FunctionComponent<any> }
> = ({ content, Link }) => (
    <DesktopResourceContainer>
        {content.map(({ resource }: { resource: any }) => {
            switch (resource.__typename) {
                case 'ArticleDTO': {
                    return (
                        <ResourceRow
                            resourceType={resource.__typename
                                .split('DTO')[0]
                                .toLowerCase()}
                            key={String(resource.id)}
                            id={String(resource.id)}
                            version={Number(resource.version)}
                            title={String(resource.title)}
                            description={String(resource.description)}
                            tags={
                                (resource.tags &&
                                    resource.tags.map((tag: string) =>
                                        tag ? tag : ''
                                    )) ||
                                []
                            }
                            username={
                                (resource.owner as any).username ||
                                (resource.owner as any).name
                            }
                            userId={(resource.owner as any).id}
                            userAvatar={(resource.owner as any).avatar}
                            date={resource.datePublished}
                            ownerType={'USER'}
                            linkComponent={(children, route) => (
                                <Link useAnchorTag={true} href={route}>
                                    {children}
                                </Link>
                            )}
                            imageURL={
                                resource &&
                                resource.attributes &&
                                resource.attributes.background
                            }
                        />
                    )
                }

                case 'CollectionDTO': {
                    return (
                        <ResourceRow
                            resourceType={resource.__typename
                                .split('DTO')[0]
                                .toLowerCase()}
                            key={String(resource.id)}
                            id={String(resource.id)}
                            title={String(resource.name)}
                            description={String(resource.description)}
                            tags={
                                (resource.tags &&
                                    resource.tags.map((tag: string) =>
                                        tag ? tag : ''
                                    )) ||
                                []
                            }
                            username={
                                (resource.owner as any).username ||
                                (resource.owner as any).name
                            }
                            userId={(resource.owner as any).id}
                            userAvatar={(resource.owner as any).avatar}
                            date={resource.dateUpdated}
                            ownerType={'USER'}
                            linkComponent={(children, route) => (
                                <Link useAnchorTag={true} href={route}>
                                    {children}
                                </Link>
                            )}
                            imageURL={resource.background}
                        />
                    )
                }

                default: {
                    return null
                }
            }
        })}
    </DesktopResourceContainer>
)

const FeaturedContent: React.FunctionComponent<IProps> = props => (
    <Container>
        <Title2>Featured Content</Title2>
        <RenderDesktopFeaturedContent
            {...props}
            Link={props.Link as React.FunctionComponent<any>}
        />
        <RenderMobileFeaturedContent {...props} />
    </Container>
)

export default FeaturedContent
