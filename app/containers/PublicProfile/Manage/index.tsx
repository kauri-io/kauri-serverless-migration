import React from 'react'
import withPagination from '../../../lib/with-pagination'
import ResourceCategory from '../../../components/ResourceCategory'
import Drafts from '../Drafts'
import Awaiting from '../Awaiting/View'
import Pending from '../Pending/View'
import Transfers from './Transfers'
import MyCommunities from './MyCommunities'
import { path } from 'ramda'
import { Grid, makeStyles, Theme } from '@material-ui/core'
import TipHistory from './TipHistory'

const categories = [
    'drafts',
    'awaiting approval',
    'submitted updates',
    // "communities",
    'tip history',
]

interface IState {
    currentCategory: string
}

const Manage: React.FunctionComponent<any> = props => {
    const [state, setState] = React.useState<IState>({
        currentCategory: 'drafts',
    })

    const communities = path(
        ['ownProfile', 'getMyProfile', 'communities'],
        props
    )

    if (categories.indexOf('pending transfers') === -1) {
        categories.push('pending transfers')
    }
    if (
        (communities as []).length > 0 &&
        categories.indexOf('communities') === -1
    ) {
        categories.push('communities')
    }

    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            maxWidth: 1272,
            marginLeft: `auto`,
            marginRight: 'auto',
            marginTop: theme.spacing(2),
        },
    }))
    const classes = useStyles()

    return (
        <Grid className={classes.container} container={true}>
            <Grid
                sm={3}
                container={true}
                item={true}
                spacing={2}
                direction="column"
            >
                {categories.map(category => (
                    <Grid item={true}>
                        <ResourceCategory
                            key={category}
                            active={category === state.currentCategory}
                            category={category}
                            amount={null}
                            onClick={() =>
                                setState({ currentCategory: category })
                            }
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid sm={9} item={true}>
                {state.currentCategory === 'drafts' && <Drafts {...props} />}
                {state.currentCategory === 'awaiting approval' && (
                    <Awaiting
                        {...props}
                        communities={
                            Array.isArray(communities) &&
                            communities
                                .filter(
                                    ({ role }) =>
                                        role === 'ADMIN' || role === 'CURATOR'
                                )
                                .map(({ community: { id } }) => id)
                        }
                    />
                )}
                {state.currentCategory === 'submitted updates' && (
                    <Pending {...props} />
                )}
                {state.currentCategory === 'pending transfers' && (
                    <Transfers {...props} />
                )}
                {state.currentCategory === 'communities' && (
                    <MyCommunities {...props} data={communities} />
                )}
                {state.currentCategory === 'tip history' && (
                    <TipHistory {...props} />
                )}
            </Grid>
        </Grid>
    )
}
//
export default withPagination(Manage, 'searchArticles')
