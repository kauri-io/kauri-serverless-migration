import React, { useState } from 'react'
import List from './List'
import Header from './Header'
import { Tabs, Tab } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { routeChangeAction } from '../../../lib/Epics/RouteChangeEpic'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}))

const CollectionDiscover = ({ isLoggedIn, routeChangeAction }) => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    return (
        <div>
            <Header
                isLoggedIn={isLoggedIn}
                routeChangeAction={routeChangeAction}
            />
            <Tabs
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                className={classes.tabs}
                centered={true}
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="Hot This Week" />
                <Tab label="Most Popular" />
                <Tab label="Recent" />
            </Tabs>
            {tab === 0 && <List key="hot" scoringMode="TRENDING" />}
            {tab === 1 && <List key="popular" scoringMode="MOST_POPULAR" />}
            {tab === 2 && <List key="posted" scoringMode="LAST_POSTED" />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
    }
}
export default connect(
    mapStateToProps,
    {
        routeChangeAction,
    }
)(CollectionDiscover)
