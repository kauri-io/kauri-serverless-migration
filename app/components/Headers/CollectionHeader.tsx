import moment from 'moment-mini'
import styled from 'styled-components'
import ShareArticle from '../Tooltip/ShareArticle'
import Avatar from '../Avatar'
import Button from '../../components/Button'
import StatisticsContainer from '../PublicProfile/StatisticsContainer'
import { TagList } from '../Tags'
import { getUpdateCollectionURL } from '../../lib/getURLs'
import { Tooltip, Typography, Hidden } from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkResource from '../../containers/Bookmark/BookmarkResourceWidget'
import { ResourceTypeInput } from '../../__generated__/globalTypes'

const CollectionHeaderSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    z-index: 1;
    padding: 100px ${props => props.theme.padding} 24px;
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
        margin: 8px 0;
    }
    > :nth-last-child(2) {
        margin-bottom: ${props => props.tags && props.theme.space[1]}px;
    }
    > :last-child {
        margin-top: ${props => props.theme.space[2]}px;
    }
    @media (max-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
    @media (min-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
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
    @media (min-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
`

const ShareContainer = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 500px) {
        justify-content: center;
    }
    justify-content: flex-start;
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
    isBookmarked: boolean
    isLoggedIn: boolean
    openModalAction: any
    type?: ResourceTypeInput
}

const Container: React.SFC<IProps> = props => {
    const {
        articleCount,
        description,
        id,
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
        isBookmarked,
        isLoggedIn,
        openModalAction,
        type,
    } = props
    return (
        <CollectionHeaderSection>
            <LeftSide tags={tags}>
                <Typography variant="button" color="secondary">
                    Collection Updated {moment(updated).fromNow()}
                </Typography>
                <Typography variant="h4" component="h1" color="secondary">
                    {name}
                </Typography>
                <Typography color="secondary">{description}</Typography>
                {tags && (
                    <TagList
                        routeChangeAction={routeChangeAction}
                        color={'white'}
                        maxTags={5}
                        tags={tags}
                    />
                )}
                <ShareContainer>
                    <ShareArticle color={'white'} url={url} title={name} />
                    <Hidden mdDown={true}>
                        <Tooltip
                            title={isBookmarked ? 'Unbookmark' : 'Bookmark'}
                        >
                            <div
                                onClick={() =>
                                    isLoggedIn && openModalAction
                                        ? openModalAction({
                                              children: (
                                                  <BookmarkResource
                                                      resourceId={id}
                                                      resourceType={
                                                          ResourceTypeInput.COLLECTION
                                                      }
                                                  />
                                              ),
                                          })
                                        : routeChangeAction &&
                                          routeChangeAction(`/login`)
                                }
                            >
                                {isBookmarked ? (
                                    <BookmarkIcon color="primary" />
                                ) : (
                                    <BookmarkBorderIcon color="primary" />
                                )}
                            </div>
                        </Tooltip>
                    </Hidden>
                </ShareContainer>
            </LeftSide>
            <RightSide>
                <StatisticsContainer
                    pageType="CollectionPage"
                    statistics={[
                        {
                            count: articleCount,
                            name: 'Articles',
                        },
                    ]}
                />

                <Typography color="secondary" variant="button">
                    Curator
                </Typography>
                <Avatar
                    color="secondary"
                    username={username}
                    name={username}
                    id={ownerId}
                    avatar={userAvatar || imageURL}
                    type={type}
                    withName={true}
                />
                {userId === ownerId || isMemberOfCommunityOwner ? (
                    <Button
                        color="primary"
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
