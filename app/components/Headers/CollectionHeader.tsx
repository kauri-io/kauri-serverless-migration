import moment from 'moment'
import styled from 'styled-components'
import { Title1, Label, PageDescription } from '../Typography'
import ShareArticle from '../Tooltip/ShareArticle'
import UserAvatar from '../UserAvatar'
import Button from '../../components/Button'
import StatisticsContainer from '../PublicProfile/StatisticsContainer'
import { TagList } from '../Tags'
import { getUpdateCollectionURL } from '../../lib/getURLs'

const CollectionHeaderSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    z-index: 1;
    padding: ${props => props.theme.space[4] + 40}px
        ${props => props.theme.padding} ${props => props.theme.space[3]}px;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const LeftSide = styled.div<{ tags: any | undefined }>`
    display: flex;
    flex: 3;
    flex-direction: column;
    color: white;
    > :nth-child(2) {
        margin-top: ${props => props.theme.space[1]}px;
    }
    > :nth-last-child(2) {
        margin-bottom: ${props => props.tags && props.theme.space[1]}px;
    }
    > :last-child {
        margin-top: ${props => props.theme.space[2]}px;
    }
    @media (max-width: 500px) {
        padding: ${props => props.theme.space[1]}px;
    }
`

const RightSide = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > :first-child {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
    > button:last-child {
        margin-top: ${props => props.theme.space[3]}px;
    }
`

interface IProps {
    proposedCommunityId?: string | null
    collectionCount: number
    articleCount: number
    description: string
    id: string
    imageURL: string | null
    linkComponent: any
    name: string
    ownerId: string
    routeChangeAction: any
    tags: string[]
    updated: string
    url: string
    userAvatar: string | null
    userId: string
    username: string | null
    approveResourceAction?: any
    isMemberOfCommunityOwner: boolean
}

const Container: React.SFC<IProps> = props => {
    const {
        collectionCount,
        articleCount,
        description,
        id,
        linkComponent,
        name,
        ownerId,
        updated,
        url,
        userAvatar,
        username,
        userId,
        routeChangeAction,
        imageURL,
        tags,
        proposedCommunityId,
        approveResourceAction,
        isMemberOfCommunityOwner,
    } = props
    return (
        <CollectionHeaderSection>
            <LeftSide tags={tags}>
                <Label>Collection Updated {moment(updated).fromNow()}</Label>
                <Title1 color="white">{name}</Title1>
                <PageDescription color="white">{description}</PageDescription>
                {tags && (
                    <TagList
                        routeChangeAction={routeChangeAction}
                        color={'white'}
                        maxTags={5}
                        tags={tags}
                    />
                )}
                <ShareArticle color={'white'} url={url} title={name} />
            </LeftSide>
            <RightSide>
                <StatisticsContainer
                    pageType="CollectionPage"
                    statistics={[
                        {
                            count: articleCount,
                            name: 'Articles',
                        },
                        {
                            count: collectionCount,
                            name: 'Collections',
                        },
                    ]}
                />

                <Label color="white">Curator</Label>
                {linkComponent ? (
                    linkComponent(
                        <UserAvatar
                            cardType={'COLLECTION'}
                            imageURL={imageURL}
                            variant="white"
                            fullWidth={true}
                            username={username}
                            avatar={userAvatar}
                            userId={ownerId}
                        />
                    )
                ) : (
                    <UserAvatar
                        imageURL={imageURL}
                        cardType={'COLLECTION'}
                        variant="white"
                        username={username}
                        avatar={userAvatar}
                        fullWidth={true}
                        userId={ownerId}
                    />
                )}
                {userId === ownerId || isMemberOfCommunityOwner ? (
                    <Button
                        variant="contained"
                        onClick={() =>
                            routeChangeAction(
                                getUpdateCollectionURL({ id }).href
                            )
                        }
                    >
                        Update Collection
                    </Button>
                ) : null}
                {proposedCommunityId && (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() =>
                            approveResourceAction &&
                            approveResourceAction({
                                id: proposedCommunityId,
                                resource: { type: 'COLLECTION', id } as any,
                            })
                        }
                    >
                        Approve community proposed collection
                    </Button>
                )}
            </RightSide>
        </CollectionHeaderSection>
    )
}

export default Container
