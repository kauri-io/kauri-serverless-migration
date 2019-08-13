import React, { useState } from 'react'
import List from './List'
import Header from './Header'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        background: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}))

const ArticleDiscover = () => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    return (
        <div>
            <Header category={'ARTICLE'} />
            <Tabs
                TabIndicatorProps={{ style: { height: 3 } }}
                indicatorColor="primary"
                className={classes.tabs}
                centered={true}
                value={tab}
                onChange={(_e, tab) => setTab(tab)}
            >
                <Tab label="Trending" />
                <Tab label="Most Popular" />
                <Tab label="Last Posted" />
                <Tab label="Last Updated" />
                <Tab label="Random" />
            </Tabs>
            {tab === 0 && <List key="hot" scoringMode="TRENDING" />}
            {tab === 1 && <List key="popular" scoringMode="MOST_POPULAR" />}
            {tab === 2 && <List key="posted" scoringMode="LAST_POSTED" />}
            {tab === 3 && <List key="updated" scoringMode="LAST_UPDATED" />}
            {tab === 4 && <List key="random" scoringMode="RANDOM" />}
        </div>
    )
}

export default ArticleDiscover
