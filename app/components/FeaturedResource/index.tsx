import styled from 'styled-components'
import UserAvatarComponent, {
    IProps as UserAvatarComponentProps,
} from '../UserAvatar'
import { Label, Title2, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import SecondaryButtonComponent from '../Button/SecondaryButton'
import slugify from 'slugify'
import Link from 'next/link'

const ContentSection = styled.div`
    display: flex;
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        flex-direction: column;
        > :first-child {
            margin-bottom: ${props => props.theme.space[3]}px;
        }
    }
    ${props => props.theme.padContent};
`

const ResourceDetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 3;
    > :not(:last-child) {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
`

const ViewContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`

export const FeaturedResourceContainer = styled.div`
    display: flex;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: ${props => props.theme.space[3]}px 0px;
    background: white;
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        padding: ${props => props.theme.space[3]}px
            ${props => props.theme.space[2]}px;
        ${ViewContainer} {
            align-items: flex-start;
        }
    }
`

interface IProps {
    id: string
    version: string | null
    title: string
    description: string
    tags: string[]
    resourceType: string
    ownerResourceType: string
}

const FeaturedResource: React.FunctionComponent<
    IProps & UserAvatarComponentProps
> = ({
    title,
    description,
    resourceType,
    id,
    userId,
    tags,
    username,
    avatar,
    ownerResourceType,
}) => {
    const slug = slugify(title, { lower: true })
    return (
        <FeaturedResourceContainer>
            <ContentSection>
                <ResourceDetailsContainer>
                    <Label>Featured</Label>
                    <Link
                        href={
                            resourceType === 'article'
                                ? `/${slug}/${id}/a`
                                : resourceType === 'collection'
                                ? `/${slugify(name, { lower: true })}/${id}/c`
                                : `/community/${id}`
                        }
                    >
                        <a>
                            <Title2>{title && String(title)}</Title2>
                            <BodyCard>
                                {description && String(description)}
                            </BodyCard>
                        </a>
                    </Link>
                    <TagList maxTags={3} color="textPrimary" tags={tags} />
                    <Link
                        href={
                            ownerResourceType === 'COMMUNITY'
                                ? `/community/${userId}`
                                : `/public-profile/${userId}`
                        }
                    >
                        <a>
                            <UserAvatarComponent
                                userId={userId}
                                username={username}
                                avatar={avatar}
                            />
                        </a>
                    </Link>
                </ResourceDetailsContainer>
                <ViewContainer>
                    <Link
                        href={
                            resourceType === 'article'
                                ? `/${slug}/${id}/a`
                                : resourceType === 'collection'
                                ? `/${slugify(name, { lower: true })}/${id}/c`
                                : `/community/${id}`
                        }
                    >
                        <a>
                            <SecondaryButtonComponent
                                border="primary"
                                color="textPrimary"
                            >{`View ${resourceType}`}</SecondaryButtonComponent>
                        </a>
                    </Link>
                </ViewContainer>
            </ContentSection>
        </FeaturedResourceContainer>
    )
}

export default FeaturedResource
