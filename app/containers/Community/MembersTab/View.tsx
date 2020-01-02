import React from 'react'
import { makeStyles, Theme, Grid } from '@material-ui/core'
import Loading from '../../../components/Loading'
import { getProfileURL } from '../../../lib/getURLs'
import NoUser from '../EmptyStates/NoUser'
import { getCommunityMembers_getCommunityMembers } from '../../../queries/__generated__/getCommunityMembers'
import PublicProfileCard from '../../../components/Card/PublicProfileCard'

interface IProps {
    getCommunityMembersQuery: {
        loading: boolean
        getCommunityMembers: getCommunityMembers_getCommunityMembers
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        padding: theme.spacing(1),
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        paddingTop: theme.spacing(4),
        width: '100%',
        maxWidth: 808,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(1, 1),
    },
}))

export const ResourceTab = ({ getCommunityMembersQuery }: IProps) => {
    const classes = useStyles()

    if (getCommunityMembersQuery.loading) {
        return <Loading />
    }

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Grid container={true} spacing={2}>
                    {getCommunityMembersQuery.getCommunityMembers.content &&
                    getCommunityMembersQuery.getCommunityMembers.totalElements >
                        0 ? (
                        getCommunityMembersQuery.getCommunityMembers.content.map(
                            (obj: any, key) => {
                                return (
                                    <Grid
                                        key={key}
                                        item
                                        xs={12}
                                        sm={12}
                                        lg={12}
                                    >
                                        <PublicProfileCard
                                            {...obj.user}
                                            href={getProfileURL({
                                                ...obj.user,
                                            })}
                                        />
                                    </Grid>
                                )
                            }
                        )
                    ) : (
                        <div style={{ width: '100%' }}>
                            <NoUser />
                        </div>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default ResourceTab
