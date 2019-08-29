import moment from 'moment-mini'
import styled from 'styled-components'
import Avatar from '../Avatar'
import { Label, H1, BodyCard } from '../Typography'
import TagList from '../Tags/TagList'
import Image from '../Image'
import theme from '../../lib/theme-config'
import slugify from 'slugify'
import Link from 'next/link'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const ResourceRow = styled.div`
    display: flex;
    width: ${props => DEFAULT_CARD_WIDTH * 3 + props.theme.space[3] * 2}px;
    height: 195px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.11);
    cursor: pointer;
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
    ownerType: string // "USER" | "COMMUNITY" | "COLLECTION";
    resourceType: string // "article" | "community" | "collection"
}

const ResourceRowWithImage: React.SFC<IProps> = ({
    title,
    description,
    imageURL,
    id,
    resourceType,
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
            {imageURL && (
                <Link
                    href={
                        resourceType === 'collection'
                            ? `/${slugify(title, { lower: true })}/${id}/c`
                            : resourceType === 'community'
                            ? `/community/${id}`
                            : `/${slug}/${id}/a`
                    }
                >
                    <a>
                        <Image
                            width={DEFAULT_CARD_WIDTH}
                            height={195}
                            image={imageURL}
                            borderTopLeftRadius={'4px'}
                            borderBottomLeftRadius={'4px'}
                        />
                    </a>
                </Link>
            )}
            <Container>
                <Link
                    href={
                        resourceType === 'collection'
                            ? `/${slugify(title, { lower: true })}/${id}/c`
                            : resourceType === 'community'
                            ? `/community/${id}`
                            : `/${slug}/${id}/a`
                    }
                >
                    <a>
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
                        </Content>
                    </a>
                </Link>
                <Divider />
                <Footer>
                    <Avatar
                        username={username}
                        id={userId}
                        avatar={userAvatar}
                        type={ownerType}
                        withName={true}
                    />
                </Footer>
            </Container>
        </ResourceRow>
    )
}

export default ResourceRowWithImage
