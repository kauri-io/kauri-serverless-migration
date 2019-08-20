import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import CommunityCard from '../../../components/Card/CommunityCard'
import Loading from '../../../components/Loading'
import { searchCommunities_searchCommunities } from '../../../queries/__generated__/searchCommunities'
import { getCommunityURL } from '../../../lib/getURLs'
import { Grid, Container, withStyles } from '@material-ui/core'

interface IProps {
    CommunityQuery: {
        error: string
        searchCommunities?: searchCommunities_searchCommunities
    }
    hostName: string
    routeChangeAction(route: string): void
    classes: { grid: any }
}

class Communities extends Component<IProps> {
    render() {
        if (this.props.CommunityQuery.error) {
            return null
        } // TODO replace with an error message if exists

        const { searchCommunities } = this.props.CommunityQuery

        return (
            <Fragment>
                <Head>
                    <title>
                        Beginner to Advanced Blockchain & Ethereum Tutorials |
                        Communities - Kauri
                    </title>
                    <meta
                        name="description"
                        content="Discover the best collections of blockchain related articles, tutorials and how-to guides"
                    />
                    <link
                        rel="canonical"
                        href={`https://${this.props.hostName}/collections`}
                    />
                </Head>
                <Container>
                    {searchCommunities ? (
                        <Grid
                            className={this.props.classes.grid}
                            container
                            spacing={3}
                        >
                            {searchCommunities &&
                                searchCommunities.content &&
                                searchCommunities.content.map(
                                    community =>
                                        community && (
                                            <Grid
                                                key={community.id}
                                                item
                                                xs={12}
                                            >
                                                <CommunityCard
                                                    {...community}
                                                    key={community.id}
                                                    href={getCommunityURL(
                                                        community
                                                    )}
                                                />
                                            </Grid>
                                        )
                                )}
                        </Grid>
                    ) : (
                        <Loading />
                    )}
                </Container>
            </Fragment>
        )
    }
}

export default withStyles({
    grid: {
        padding: '24px 0',
        margin: 'auto',
        maxWidth: 870,
    },
})(Communities)
