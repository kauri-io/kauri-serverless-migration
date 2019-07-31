import styled from 'styled-components'
import UserAvatarComponent, {
    IProps as UserAvatarComponentProps,
} from '../UserAvatar'
import { Label, Title2, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import SecondaryButtonComponent from '../Button/SecondaryButton'
import slugify from 'slugify'

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
    linkComponent: (
        children: React.ReactElement<any>,
        route: string
    ) => React.ReactElement<any>
}

const FeaturedResource: React.FunctionComponent<
    IProps & UserAvatarComponentProps
> = ({
    title,
    description,
    linkComponent,
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
                    {linkComponent(
                        <>
                            <Title2>{title && String(title)}</Title2>
                            <BodyCard>
                                {description && String(description)}
                            </BodyCard>
                        </>,
                        resourceType === 'article'
                            ? `/${slug}/${id}/a`
                            : resourceType === 'collection'
                            ? `/${slugify(name, { lower: true })}/${id}/c`
                            : `/community/${id}`
                    )}
                    <TagList maxTags={3} color="textPrimary" tags={tags} />
                    {linkComponent(
                        <UserAvatarComponent
                            userId={userId}
                            username={username}
                            avatar={avatar}
                        />,
                        ownerResourceType === 'COMMUNITY'
                            ? `/community/${userId}`
                            : `/public-profile/${userId}`
                    )}
                </ResourceDetailsContainer>
                <ViewContainer>
                    {linkComponent(
                        <SecondaryButtonComponent
                            border="primary"
                            color="textPrimary"
                        >{`View ${resourceType}`}</SecondaryButtonComponent>,
                        resourceType === 'article'
                            ? `/${slug}/${id}/a`
                            : resourceType === 'collection'
                            ? `/${slugify(name, { lower: true })}/${id}/c`
                            : `/community/${id}`
                    )}
                </ViewContainer>
            </ContentSection>
        </FeaturedResourceContainer>
    )
}

export default FeaturedResource
