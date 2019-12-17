import React, { useState } from 'react'
import styled from 'styled-components'
import ResourceCategory from '../../../components/ResourceCategory'
import ManageMembers from '../../CreateCommunityForm/ManageMembers'
import { getCommunity_getCommunity_members } from '../../../queries/__generated__/getCommunity'
import { IInvitation } from '../../CreateCommunityForm/ManageMembers/FormInviteMembersPanel'
import { searchArticles_searchArticles } from '../../../queries/__generated__/searchArticles'
import Loading from '../../../components/Loading'
import { makeStyles, Theme, Grid } from '@material-ui/core'
import ArticleCard from '../../../components/Card/ArticleCard'
import { getArticleURL } from '../../../lib/getURLs'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.space[3]}px ${props => props.theme.padding};
    > :first-child {
        margin-right: ${props => props.theme.space[3]}px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: ${props => props.theme.space[2]}px;
    }
    &:not(:first-child) {
        flex: 1;
    }
`

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        padding: theme.spacing(1),
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        paddingBotton: theme.spacing(4),
        width: '100%',
        maxWidth: 808,
    },
    container: {
        display: 'flex',
        padding: theme.spacing(0, 1),
    },
}))

interface IProps {
    cancelInvitation?: (payload: { index: number }) => void
    communityId: string | null
    isCommunityAdmin: boolean
    members: Array<getCommunity_getCommunity_members | null> | null
    openAddMemberModal: () => void
    pageType?: string // CreateCommunityForm
    formInvitations?: IInvitation[] | null | undefined
    data: {
        searchArticles: searchArticles_searchArticles
    }
}

const Manage: React.FunctionComponent<IProps> = ({
    members,
    isCommunityAdmin,
    communityId,
    pageType,
    cancelInvitation,
    formInvitations,
    openAddMemberModal,
    data,
}) => {

    const classes = useStyles()

    const [tabIndex, setTabIndex] = useState(isCommunityAdmin ? 0 : 1)

    if (!data.searchArticles) {
        return <Loading />
    }

    return (
        <Container>
            <Column>
                {isCommunityAdmin && (
                    <ResourceCategory
                        active={tabIndex === 0}
                        category="Manage Members"
                        amount={members ? members.length : 0}
                        onClick={() => setTabIndex(0)}
                    />
                )}
                {/* {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 1}
                        category="Articles for approval"
                        amount={null}
                        onClick={() => setTabIndex(1)}
                    />
                )}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 2}
                        category="Collections for approval"
                        amount={null}
                        onClick={() => setTabIndex(2)}
                    />
                )} */}
                {pageType !== 'CreateCommunityForm' && (
                    <ResourceCategory
                        active={tabIndex === 3}
                        category="Pending Updates"
                        amount={data.searchArticles.totalElements}
                        onClick={() => setTabIndex(3)}
                    />
                )}
            </Column>
            <Column>
                {tabIndex === 0 && (
                    <ManageMembers
                        id={communityId}
                        members={members}
                        cancelInvitation={cancelInvitation}
                        formInvitations={formInvitations}
                        openAddMemberModal={openAddMemberModal}
                    />
                )}
                {/* {tabIndex === 1 && pageType !== 'CreateCommunityForm' && (
                    <div></div>
                )}
                {tabIndex === 2 && pageType !== 'CreateCommunityForm' && (
                    <div></div>
                )} */}
                {tabIndex === 3 && pageType !== 'CreateCommunityForm' && (
                    <div className={classes.container}>
                        <div className={classes.root}>
                            <Grid container={true} spacing={2}>
                                {data.searchArticles.content &&
                                data.searchArticles.totalElements >
                                    0 ? (
                                        data.searchArticles.content.map(
                                        (resource: any, key) => {
                                            switch (resource.__typename) {
                                                case 'ArticleDTO': {
                                                    return (
                                                        <Grid
                                                            key={key}
                                                            item
                                                            xs={12}
                                                            sm={12}
                                                            lg={12}
                                                        >
                                                            <ArticleCard
                                                                {...resource}
                                                                href={getArticleURL(
                                                                    resource, 'review'
                                                                )}
                                                            />
                                                        </Grid>
                                                    )
                                                }

                                                default: {
                                                    return null
                                                }
                                            }
                                        }
                                    )
                                ) : (
                                    <div style={{ width: '100%' }}>
                                        <p>No Pending articles</p>
                                    </div>
                                )}
                            </Grid>
                        </div>
                    </div>
                )}
            </Column>
        </Container>
    )
}

export default Manage
