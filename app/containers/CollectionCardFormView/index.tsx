import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { getCollectionQuery } from '../../queries/Collection'
import withLoading from '../../lib/with-loading'
import withApolloError from '../../lib/with-apollo-error'
import CollectionCard from '../../components/Card/CollectionCard'
import { IReduxState } from '../../lib/Module'
import { getCollectionVariables } from '../../queries/__generated__/getCollection'
import { getCollectionURL } from '../../lib/getURLs'

const mapStateToProps = (state: IReduxState) => ({
    hostName: state.app && state.app.hostName,
    isLoggedIn: !!(state.app && state.app.user && state.app.user.id),
})

interface IProps {
    data: { getCollection: any }
}

const View: React.FunctionComponent<IProps> = ({ data }) => {
    if (!data.getCollection) {
        return null
    }

    const { getCollection: collection } = data

    const owner =
        collection.owner && collection.owner.__typename === 'PublicUserDTO'
            ? {
                  avatar: collection.owner.avatar,
                  id: collection.owner.id || 'not_found',
                  type: 'USER',
                  username: collection.owner.username,
              }
            : collection.owner && collection.owner.__typename === 'CommunityDTO'
            ? {
                  avatar: collection.owner.avatar,
                  id: collection.owner.id || 'not_found',
                  type: 'COMMUNITY',
                  username: collection.owner.name,
              }
            : {
                  avatar: '',
                  id: '',

                  username: '',
              }

    return (
        <CollectionCard
            {...collection}
            href={getCollectionURL(collection)}
            key={collection.id}
            owner={owner}
        />
    )
}

export default compose(
    connect(
        mapStateToProps,
        {}
    ),
    graphql(getCollectionQuery, {
        options: ({ id }: getCollectionVariables) => ({
            variables: {
                id,
            },
        }),
    }),
    withLoading(),
    withApolloError()
)(View)
