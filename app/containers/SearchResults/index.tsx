import {
    Grid,
    Typography,
    InputBase,
    Tabs,
    Tab,
    Hidden,
    Menu,
    MenuItem,
    Theme,
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
import Chevron from '@material-ui/icons/ChevronLeft'

const debouncedRoute = debounce((query, routeChangeAction) => {
    if (query) {
        routeChangeAction(`/search-results?q=${query}`)
    }
}, 500)

const Search = ({ routeChangeAction, query, data: { searchAutocomplete } }) => {
    const [tab, setTab] = useState(0)

    const [createAnchorEl, setCreateAnchorEl] = useState<
        HTMLLIElement | HTMLButtonElement | null
    >(null)

    const isCreateMenuOpen = Boolean(createAnchorEl)

    const openDropdown = (
        event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>
    ) => {
        setCreateAnchorEl(event.currentTarget)
    }

    const closeDropDown = () => {
        setCreateAnchorEl(null)
    }

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
            background: `url(/static/images/HomepageBannerSVG.svg) center center no-repeat`,
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
        dropdown: {
            margin: theme.spacing(2, 2, 0, 2),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            '& > svg': {
                transition: 'all 0.2s',
                transform: createAnchorEl ? 'rotate(90deg)' : 'rotate(-90deg)',
            },
        },
        fullWidth: {
            width: '100%',
        },
    }))

    const classes = useStyles()

    const getDropdownString = tab => {
        switch (tab) {
            case 0:
                return `Articles (${(searchAutocomplete &&
                    searchAutocomplete.totalElementsBreakdown.ARTICLE) ||
                    0})`
            case 1:
                return `Collections (${(searchAutocomplete &&
                    searchAutocomplete.totalElementsBreakdown.COLLECTION) ||
                    0})`
            case 2:
                return `Communities (${(searchAutocomplete &&
                    searchAutocomplete.totalElementsBreakdown.COMMUNITY) ||
                    0})`
            case 3:
                return `Users (${(searchAutocomplete &&
                    searchAutocomplete.totalElementsBreakdown.USER) ||
                    0})`
        }
    }

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
                    <div className={classes.searchIconClass}>
                        <SearchIcon />
                    </div>
                </div>
            </Grid>

            <Grid>
                <Hidden mdUp={true}>
                    <Typography
                        className={classes.dropdown}
                        onClick={openDropdown}
                    >
                        {getDropdownString(tab)} <Chevron />
                    </Typography>
                    <Menu
                        variant="selectedMenu"
                        open={isCreateMenuOpen}
                        anchorEl={createAnchorEl}
                        onClose={closeDropDown}
                        PaperProps={{
                            style: {
                                width: '100%',
                            },
                        }}
                    >
                        <MenuItem
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown
                                    .ARTICLE
                            }
                            onClick={() => {
                                closeDropDown()
                                setTab(0)
                            }}
                        >
                            {getDropdownString(0)}
                        </MenuItem>
                        <MenuItem
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown
                                    .COLLECTION
                            }
                            onClick={() => {
                                closeDropDown()
                                setTab(1)
                            }}
                        >
                            {getDropdownString(1)}
                        </MenuItem>
                        <MenuItem
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown
                                    .COMMUNITY
                            }
                            onClick={() => {
                                closeDropDown()
                                setTab(2)
                            }}
                        >
                            {getDropdownString(2)}
                        </MenuItem>
                        <MenuItem
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown.USER
                            }
                            onClick={() => {
                                closeDropDown()
                                setTab(3)
                            }}
                        >
                            {getDropdownString(3)}
                        </MenuItem>
                    </Menu>
                </Hidden>
                <Hidden smDown={true}>
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
                                !searchAutocomplete.totalElementsBreakdown
                                    .ARTICLE
                            }
                            label={getDropdownString(0)}
                        />
                        <Tab
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown
                                    .COLLECTION
                            }
                            label={getDropdownString(1)}
                        />
                        <Tab
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown
                                    .COMMUNITY
                            }
                            label={getDropdownString(2)}
                        />
                        <Tab
                            disabled={
                                searchAutocomplete &&
                                !searchAutocomplete.totalElementsBreakdown.USER
                            }
                            label={getDropdownString(3)}
                        />
                    </Tabs>
                </Hidden>
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
