import {
    Grid,
    Typography,
    Theme,
    InputBase,
    Tabs,
    Tab,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import Head from 'next/head'
import { compose, graphql } from 'react-apollo'
import { searchResultsAutocomplete } from '../../queries/Search'
import DisplayResources from './DisplayResources'
import { connect } from 'react-redux'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { debounce } from '../../lib/debounce'

const debouncedRoute = debounce((query, routeChangeAction) => {
    if (query) {
        routeChangeAction(`/search-results?q=${query}`)
    }
}, 500)

const useStyles = makeStyles((theme: Theme) => ({
    container: {},
    header: {
        height: 200,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        background:
            'url(https://d1icd6shlvmxi6.cloudfront.net/gsc/DYTUBP/a3/f0/64/a3f0645719204d588fb5d4b0e6e49801/images/search/u21048.svg?token=327e6132512d18393b97569bd806c0c3ee20498290fd10d7f79b5b9868677d6a) center center no-repeat',
    },
    heading: {
        margin: theme.spacing(1),
    },
    inputInput: {
        padding: theme.spacing(1, 2),
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        paddingRight: theme.spacing(2),
    },
    searchClass: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        margin: theme.spacing(1),
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIconClass: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        cursor: 'pointer',
        marginRight: theme.spacing(2),
    },
}))

const Search = ({
    routeChangeAction,
    query,
    router,
    data: { searchAutocomplete },
}) => {
    const classes = useStyles({})
    const [tab, setTab] = useState(0)

    return (
        <Grid className={classes.container}>
            <Head>
                <title>{query.q} Kauri Search</title>
            </Head>
            <Grid className={classes.header}>
                <Typography className={classes.heading} variant="h5">
                    Search Results
                </Typography>
                <Typography variant="subtitle2">
                    {searchAutocomplete && searchAutocomplete.totalElements}{' '}
                    results
                </Typography>
                <div className={classes.searchClass}>
                    <InputBase
                        placeholder="Search…"
                        onChange={e =>
                            debouncedRoute(e.target.value, routeChangeAction)
                        }
                        classes={{
                            input: classes.inputInput,
                            root: classes.inputRoot,
                        }}
                        defaultValue={query.q}
                    />
                    <div
                        className={classes.searchIconClass}
                        onClick={() =>
                            query.q &&
                            query.q.length > 0 &&
                            router.push(`/search-results?q=${query.q}`)
                        }
                    >
                        <SearchIcon />
                    </div>
                </div>
            </Grid>

            <Grid>
                <Tabs
                    TabIndicatorProps={{ style: { height: 3 } }}
                    indicatorColor="primary"
                    centered={true}
                    value={tab}
                    onChange={(_e, tab) => setTab(tab)}
                >
                    <Tab
                        disabled={
                            searchAutocomplete &&
                            !searchAutocomplete.totalElementsBreakdown.ARTICLE
                        }
                        label={`Articles (${(searchAutocomplete &&
                            searchAutocomplete.totalElementsBreakdown
                                .ARTICLE) ||
                            0})`}
                    />
                    <Tab
                        disabled={
                            searchAutocomplete &&
                            !searchAutocomplete.totalElementsBreakdown
                                .COLLECTION
                        }
                        label={`Collections (${(searchAutocomplete &&
                            searchAutocomplete.totalElementsBreakdown
                                .COLLECTION) ||
                            0})`}
                    />
                    <Tab
                        disabled={
                            searchAutocomplete &&
                            !searchAutocomplete.totalElementsBreakdown.COMMUNITY
                        }
                        label={`Communities (${(searchAutocomplete &&
                            searchAutocomplete.totalElementsBreakdown
                                .COMMUNITY) ||
                            0})`}
                    />
                    <Tab
                        disabled={
                            searchAutocomplete &&
                            !searchAutocomplete.totalElementsBreakdown.USER
                        }
                        label={`Profiles (${(searchAutocomplete &&
                            searchAutocomplete.totalElementsBreakdown.USER) ||
                            0})`}
                    />
                </Tabs>
                {tab === 0 && (
                    <Grid>
                        <DisplayResources type="ARTICLE" query={query.q} />
                    </Grid>
                )}
                {tab === 1 && (
                    <Grid>
                        <DisplayResources type="COLLECTION" query={query.q} />
                    </Grid>
                )}
                {tab === 2 && (
                    <Grid>
                        <DisplayResources type="COMMUNITY" query={query.q} />
                    </Grid>
                )}
                {tab === 3 && (
                    <Grid>
                        <DisplayResources type="USER" query={query.q} />
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default compose(
    connect(
        () => {},
        {
            routeChangeAction,
        }
    ),
    graphql(searchResultsAutocomplete, {
        options: ({
            query,
        }: {
            viewedSearchCategory: string | null
            query: {
                q: string
            }
        }) => {
            const variables = {
                page: 0,
                query: query.q,
                size: 1,
            }
            return {
                fetchPolicy: 'no-cache',
                variables,
            }
        },
    })
)(Search)
