import React from 'react'
import styled from 'styled-components'
import { BodyCard, PageDescription, Label } from '../../components/Typography'
import { Typography } from '@material-ui/core'
import Image from '../../components/Image'
import { TagList } from '../../components/Tags'
import SocialWebsiteIcon from '../../components/Social/SocialWebsiteIcon'
import Statistics from '../../components/PublicProfile/StatisticsContainer'
import anchorme from 'anchorme'
import ShareCommunity from '../../components/Tooltip/ShareArticle'
import Avatar from '../../components/Avatar'
import Button from '@material-ui/core/Button'
import {
    curateCommunityResourcesAction as curateCommunityResources,
    acceptCommunityInvitationAction as acceptCommunityInvitation,
    joinCommunityAction,
} from './Module'
import AddMemberButtonComponent from '../../components/Button/AddMemberButton'
import { getUpdateCommunityURL, getCommunityURL } from '../../lib/getURLs'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ResourceIdentifierInput } from '../../__generated__/globalTypes'
import ChooseResourceModal from '../ChooseResourceModal'
import { globalSearchApprovedArticles } from '../../queries/Article'
import { Community_members } from '../../queries/Fragments/__generated__/Community'

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        width: '200px',
        color: theme.palette.common.white,
    },
}))

const TooltipContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: relative;
    width: 190px;
    text-align: center;
    > * {
        cursor: pointer;
    }
    > span:last-child {
        text-transform: uppercase;
    }
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    border-radius: 4px;
`

const TooltipArrow = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    position: absolute;
    z-index: -1;
    top: -3%;
    width: 14px;
    height: 14px;
    background: white;
    transform: rotate(45deg);
    border-radius: 2px;
`

const TooltipItem = styled.div`
    color: #0ba986;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 700;
    width: 190px;
    line-height: 15px;
    text-align: center;
    margin: 10px;

    &:hover {
        color: #267765;
        text-decoration: underline;
        cursor: pointer;
    }
`

interface IAddContentProps {
    addCommunityArticleAction: any
}
export const AddCommunityContent: React.FunctionComponent<IAddContentProps> = ({
    addCommunityArticleAction,
}) => (
    <TooltipContainer>
        <TooltipArrow />
        <TooltipItem onClick={addCommunityArticleAction}>
            Add Article
        </TooltipItem>
    </TooltipContainer>
)

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

const Container = styled.div`
    z-index: 2;
    background: ${props => props.theme.colors.bgPrimary};
    display: flex;
    flex-direction: row;
    margin-top: -76px;
    & .image {
        margin-right: ${props => props.theme.space[3]}px;
    }
    & .name-website {
        margin-left: ${props => props.theme.space[3]}px;
    }
    & .image-name {
        margin-bottom: ${props => props.theme.space[2]}px;
    }

    & .description {
        margin-bottom: ${props => props.theme.space[1]}px;
    }

    & .links {
        margin-top: ${props => props.theme.space[1]}px;
    }

    & * {
        z-index: 10;
    }

    & .suggest-content {
        cursor: pointer;
        display: flex !important;
        align-items: center;
        & svg {
            margin-right: ${props => props.theme.space[1]}px;
        }
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > a {
        margin-right: ${props => props.theme.space[1]}px;
    }
    @media (max-width: 600px) {
        justify-content: center;
        padding-top: 20px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const ActionsRow = styled(Row)`
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[2]}px;
    }
`

const ContentRow = styled(Row)`
    padding: ${props => props.theme.space[4] + 40}px 0px
        ${props => props.theme.space[3]}px;
    ${props => props.theme.padContent};
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        flex-direction: column;
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    justify-content: center;
    @media (max-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
    @media (min-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
`

const Moderators = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > :first-child {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    > *:not(:nth-last-child(-n + 2)) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
    > *:nth-last-child(-n + 2) {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
    @media (max-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
    @media (min-width: 500px) {
        padding: ${props => props.theme.space[2]}px;
    }
`

const getURL = (value: string, type: string) => {
    const split = value.split('/')
    switch (type) {
        case 'website':
            const url = anchorme(value, { list: true })[0]
            return `${url && `${url.protocol}${url.encoded}`}`
        case 'twitter':
            return `https://www.twitter.com/${split[split.length - 1]}`
        case 'github':
            return `https://www.github.com/${split[split.length - 1]}`
        default:
            return ''
    }
}

interface IProps {
    id: string
    avatar: string | null
    name: string | null
    website: string | null
    description: string | null
    tags: Array<string | null> | null
    social: {
        github?: string
        twitter?: string
    } | null
    members: Community_members
    articleCount: number
    collectionCount: number
    background?: string
    isMember?: boolean
    isCreator?: boolean
    isCommunityAdmin?: boolean
    isCommunityModerator: boolean
    routeChangeAction?: (route: string) => void
    openModalAction: (children: any) => void
    closeModalAction: () => void
    acceptCommunityInvitationAction: typeof acceptCommunityInvitation
    joinCommunityAction: typeof joinCommunityAction
    curateCommunityResourcesAction: typeof curateCommunityResources
    secret: null | string
    openAddMemberModal: () => void
    userId: string
}

const CommunityHeader: React.FunctionComponent<IProps> = ({
    id,
    avatar,
    name,
    website,
    description,
    tags,
    social,
    background,
    articleCount,
    collectionCount,
    members,
    routeChangeAction,
    isMember,
    isCommunityAdmin,
    isCommunityModerator,
    openAddMemberModal,
    curateCommunityResourcesAction,
    joinCommunityAction,
    userId,
}) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState<boolean>(false)

    const openAddCommunityArticleModal = () => setOpen(true)
    const closeAddCommunityArticleModal = () => setOpen(false)
    return (
        <Wrapper>
            {typeof background === 'string' && (
                <Image
                    height="100%"
                    width="100%"
                    overlay={{ opacity: 0.5 }}
                    asBackground={true}
                    image={background}
                />
            )}

            {open && (
                <ChooseResourceModal
                    key={`add-resource-modal`}
                    open={open}
                    handleClose={closeAddCommunityArticleModal}
                    maxSelection={100}
                    handleConfirm={(selected: ResourceIdentifierInput[]) => {
                        closeAddCommunityArticleModal()
                        if (selected.length > 0) {
                            curateCommunityResourcesAction(
                                {
                                    id: id,
                                    resources: selected,
                                }
                            )
                        }
                    }}
                    // disable={(resource: any) =>
                    //     resource.owner.resourceIdentifier.id !== userId
                    // }
                    preSelected={[]}
                    title={'My Content'}
                    queryDoc={globalSearchApprovedArticles}
                    queryKey={'searchAutocomplete'}
                    pathToResourceId={['resourceIdentifier']}
                    pathToResource={['resource']}
                    queryVariables={{
                        size: 10,
                        filter: {
                            types: ['ARTICLE', 'LINK'],
                            mustIncludeUserId: [userId],
                        },
                        parameter: {
                            scoringMode: 'LAST_UPDATED',
                        },
                    }}
                    showSearch={false}
                />
            )}

            <Container>
                <ContentRow>
                    <LeftSide>
                        <Row className="image-name">
                            {avatar && (
                                <Image
                                    className="image"
                                    width={100}
                                    height={100}
                                    image={avatar}
                                />
                            )}
                            <LeftSide>
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    color="secondary"
                                >
                                    {name}
                                </Typography>
                                {website && (
                                    <a
                                        target="_blank"
                                        href={getURL(website, 'website')}
                                    >
                                        <BodyCard color="white">
                                            {getURL(website, 'website')}
                                        </BodyCard>
                                    </a>
                                )}
                            </LeftSide>
                        </Row>
                        <PageDescription className="description" color="white">
                            {description}
                        </PageDescription>
                        <TagList color="white" maxTags={7} tags={tags} />
                        <Links className="links">
                            {social && social.github && (
                                <SocialWebsiteIcon
                                    brand="github"
                                    height={20}
                                    socialURL={getURL(social.github, 'github')}
                                />
                            )}
                            {social && social.twitter && (
                                <SocialWebsiteIcon
                                    brand="twitter"
                                    height={20}
                                    socialURL={getURL(
                                        social.twitter,
                                        'twitter'
                                    )}
                                />
                            )}
                            <ShareCommunity
                                color={'white'}
                                url={`https://www.kauri.io/community/${id}`}
                                title={`${name} on Kauri`}
                            />
                        </Links>
                    </LeftSide>
                    <RightSide>
                        <Statistics
                            pageType="CollectionPage"
                            statistics={[
                                { name: 'Articles', count: articleCount },
                                { name: 'Collections', count: collectionCount },
                            ]}
                        />
                        <Row>
                            <RightSide>
                                <Moderators>
                                    {members && members.totalElements > 0 && (
                                        <>
                                            <Label
                                                className="moderators"
                                                color="white"
                                            >
                                                Moderators
                                            </Label>
                                            <Row>
                                                {members.content
                                                    .filter(
                                                        i =>
                                                            i !== null &&
                                                            (i.role ===
                                                                'ADMIN' ||
                                                                i.role ===
                                                                    'CURATOR')
                                                    )
                                                    .map(i =>
                                                        i ? (
                                                            <Avatar
                                                                key={String(
                                                                    i.id
                                                                )}
                                                                id={String(
                                                                    i.id
                                                                )}
                                                                username={
                                                                    i.user
                                                                        .username ||
                                                                    null
                                                                }
                                                                avatar={
                                                                    i.user
                                                                        .avatar ||
                                                                    null
                                                                }
                                                                color="secondary"
                                                                withName={false}
                                                            />
                                                        ) : null
                                                    )}
                                                {isCommunityAdmin && (
                                                    <AddMemberButtonComponent
                                                        onClick={() =>
                                                            openAddMemberModal()
                                                        }
                                                    />
                                                )}
                                            </Row>
                                        </>
                                    )}
                                </Moderators>
                            </RightSide>
                        </Row>
                        {isCommunityAdmin && (
                            <ActionsRow>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() =>
                                        routeChangeAction &&
                                        routeChangeAction(
                                            getUpdateCommunityURL({ id }).href
                                        )
                                    }
                                >
                                    Update Community
                                </Button>
                            </ActionsRow>
                        )}
                        {isMember && (
                            <ActionsRow>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    className={classes.button}
                                    onClick={() =>
                                        openAddCommunityArticleModal()
                                    }
                                >
                                    {isCommunityAdmin || isCommunityModerator ? 'Add Content' : 'Suggest Content' }
                                </Button>
                            </ActionsRow>
                        )}
                        {!isMember && (
                            <ActionsRow>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => {
                                        if (!!userId) {
                                            return joinCommunityAction({ id })
                                        } else {
                                            return (
                                                routeChangeAction &&
                                                routeChangeAction(
                                                    `/login?r=${
                                                        getCommunityURL({
                                                            id,
                                                            name,
                                                        }).as
                                                    }`
                                                )
                                            )
                                        }
                                    }}
                                >
                                    Join community
                                </Button>
                            </ActionsRow>
                        )}
                    </RightSide>
                </ContentRow>
            </Container>
        </Wrapper>
    )
}

export default CommunityHeader
