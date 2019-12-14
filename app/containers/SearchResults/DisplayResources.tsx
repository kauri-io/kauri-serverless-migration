import { Grid, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { compose, graphql } from 'react-apollo'
import withLoading from '../../lib/with-loading'
import withPagination from '../../lib/with-pagination'
import { searchResultsAutocomplete } from '../../queries/Search'
import LoadingComponent from '../../components/Loading'
import PublicProfileCard from '../../components/Card/PublicProfileCard'
import CollectionCard from '../../components/Card/CollectionCard'
import CommunityCard from '../../components/Card/CommunityCard'
import ArticleCard from '../../components/Card/ArticleCard'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(0, 2, 2, 2),
        maxWidth: 808,
        margin: 'auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

const Search = ({ loading, data: { searchAutocomplete } }) => {
    const classes = useStyles({})

    if (loading) return <LoadingComponent />

    return (
        <Grid className={classes.container}>
            {searchAutocomplete &&
                searchAutocomplete.content &&
                searchAutocomplete.content.map(i => {
                    const resource = i.resource
                    const type =
                        i.resourceIdentifier && i.resourceIdentifier.type
                    switch (type) {
                        case 'ARTICLE':
                            return <ArticleCard {...resource} />
                        case 'COLLECTION':
                            return <CollectionCard {...resource} />
                        case 'COMMUNITY':
                            return <CommunityCard {...resource} />
                        case 'USER':
                            return <PublicProfileCard {...resource} />
                        default:
                            return null
                    }
                })}
        </Grid>
    )
}

export default compose(
    graphql(searchResultsAutocomplete, {
        options: ({ query, type }: { query: string; type: string }) => {
            const variables = {
                filter: {
                    type,
                },
                page: 0,
                query,
                size: 20,
            }
            return {
                variables,
            }
        },
    }),
    withLoading()
)(withPagination(Search, 'searchAutocomplete'))
