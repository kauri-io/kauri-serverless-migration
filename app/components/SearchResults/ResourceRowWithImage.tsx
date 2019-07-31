import moment from 'moment'
import styled from 'styled-components'
import UserAvatar from '../UserAvatar'
import { Label, H1, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import Image from '../Image'
import theme from '../../lib/theme-config'
import slugify from 'slugify'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const ResourceRow = styled.div`
    display: flex;
    width: ${props => DEFAULT_CARD_WIDTH * 3 + props.theme.space[3] * 2}px;
    height: 195px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.11);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
    > *:nth-child(3) {
        margin-bottom: 0px;
    }
`

const Footer = Content

const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: ${props => props.theme.space[1]}px
        ${props => props.theme.space[2]}px;
`

const Divider = styled.div`
    width: 100%;
    margin-top: auto;
    margin-bottom: ${props => props.theme.space[1]}px;
    background-color: ${props => props.theme.colors.divider};
    height: 2px;
`

export interface IProps {
    id: string
    version?: number
    title: string
    description: string | null
    date: string
    imageURL: string | null
    tags: string[] | null
    username: string | null
    userId: string
    userAvatar: string | null
    linkComponent: (
        childrenProps: React.ReactElement<any>,
        route: string
    ) => React.ReactElement<any>
    ownerType: string // "USER" | "COMMUNITY" | "COLLECTION";
    resourceType: string // "article" | "community" | "collection"
}

const ResourceRowWithImage: React.SFC<IProps> = ({
    title,
    description,
    imageURL,
    id,
    resourceType,
    linkComponent,
    date,
    ownerType,
    tags,
    username,
    userId,
    userAvatar,
}) => {
    const slug = slugify(title, { lower: true })
    return (
        <ResourceRow key={id}>
            {imageURL &&
                linkComponent(
                    <Image
                        width={DEFAULT_CARD_WIDTH}
                        height={195}
                        image={imageURL}
                        borderTopLeftRadius={'4px'}
                        borderBottomLeftRadius={'4px'}
                    />,
                    resourceType === 'collection'
                        ? `/${slugify(title, { lower: true })}/${id}/c`
                        : resourceType === 'community'
                        ? `/community/${id}`
                        : `/${slug}/${id}/a`
                )}
            <Container>
                {linkComponent(
                    <Content>
                        <Label>
                            {ownerType === 'COLLECTION'
                                ? 'Updated ' +
                                  moment(date).format('DD MMM YYYY HH:mm')
                                : 'Posted ' +
                                  moment(date).format('DD MMM YYYY HH:mm')}
                        </Label>
                        <H1>{title && String(title)}</H1>
                        {description && (
                            <BodyCard>
                                {description && String(description)}
                            </BodyCard>
                        )}
                        {Array.isArray(tags) && tags.length > 0 && (
                            <TagList
                                maxTags={3}
                                color="textPrimary"
                                tags={tags}
                            />
                        )}
                    </Content>,
                    resourceType === 'collection'
                        ? `/${slugify(title, { lower: true })}/${id}/c`
                        : resourceType === 'community'
                        ? `/community/${id}`
                        : `/${slug}/${id}/a`
                )}
                <Divider />
                <Footer>
                    {linkComponent(
                        <UserAvatar
                            imageURL={imageURL}
                            cardType="ARTICLE"
                            fullWidth={true}
                            username={username}
                            userId={userId}
                            avatar={userAvatar}
                        />,
                        ownerType === 'COMMUNITY'
                            ? `/community/${userId}`
                            : `/public-profile/${userId}`
                    )}
                </Footer>
            </Container>
        </ResourceRow>
    )
}

export default ResourceRowWithImage
