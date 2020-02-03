import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import CommunityCard from '../../../components/Card/CommunityCard'
import Loading from '../../../components/Loading'
import {
    searchResultsAutocomplete_searchAutocomplete_content,
    searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO,
} from '../../../queries/__generated__/searchResultsAutocomplete'
import { getCommunityURL } from '../../../lib/getURLs'
import { Grid, withStyles } from '@material-ui/core'
import config from '../../../config/index'

interface IProps {
    CommunityQuery: {
        error: string
        searchAutocomplete: {
            content: searchResultsAutocomplete_searchAutocomplete_content[]
        }
    }
    hostName: string
    routeChangeAction(route: string): void
    classes: { grid: any; root: any }
}

class Communities extends Component<IProps> {
    render() {
        if (this.props.CommunityQuery.error) {
            return null
        } // TODO replace with an error message if exists

        const { searchAutocomplete } = this.props.CommunityQuery

        return (
            <Fragment>
                <Head>
                    <title>{`Kauri - ${config.title} - Communities`}</title>
                    <meta
                        name="description"
                        content={`${config.description.line1} ${config.description.line2}`}
                    />
                    <link
                        rel="canonical"
                        href={`https://${this.props.hostName}/communities`}
                    />
                </Head>
                <div className={this.props.classes.root}>
                    {searchAutocomplete ? (
                        <Grid
                            className={this.props.classes.grid}
                            container
                            spacing={2}
                        >
                            {searchAutocomplete &&
                                searchAutocomplete.content &&
                                searchAutocomplete.content.map(item => {
                                    const community = item.resource as searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO
                                    return (
                                        <Grid key={community.id} item xs={12}>
                                            <CommunityCard
                                                {...community}
                                                key={community.id}
                                                href={getCommunityURL(
                                                    community
                                                )}
                                            />
                                        </Grid>
                                    )
                                })}
                        </Grid>
                    ) : (
                        <Loading />
                    )}
                </div>
            </Fragment>
        )
    }
}

export default withStyles({
    grid: {
        paddingTop: 16,
        maxWidth: 870,
        margin: 'auto',
    },
    root: {
        display: 'flex',
    },
})(Communities)
