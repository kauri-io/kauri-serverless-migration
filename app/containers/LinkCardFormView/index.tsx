import React from 'react'
import { connect } from 'react-redux'
import { flowRight as compose } from 'lodash'
import { graphql } from 'react-apollo'
import { getLink } from '../../queries/Link'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import LinkCard from '../../components/Card/LinkCard'
import { IReduxState } from '../../lib/Module'
import { getExternalLinkVariables } from '../../queries/__generated__/getExternalLink'
import { getLinkUrl } from '../../lib/getURLs'

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
    isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
})

interface IProps {
    isLoggedIn: boolean
    data: { getExternalLink: any }
}

const View: React.FunctionComponent<IProps> = ({
    data: { getExternalLink: link },
}) => {
    return <LinkCard {...link} href={getLinkUrl(link)} />
}

export default compose(
    connect(mapStateToProps, {}),
    graphql(getLink, {
        options: ({ id }: getExternalLinkVariables) => ({
            variables: {
                id,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
