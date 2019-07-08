import ArticleProposed from './View.js'
import { routeChangeAction } from '../../lib/Epics/RouteChangeEpic'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { getArticle } from '../../queries/Article'
import withLoading from '../../lib/with-loading'

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.app && state.app.user && state.app.user.id,
  }
}

export default compose(
  connect(
    mapStateToProps,
    { routeChangeAction }
  ),
  graphql(getArticle, {
    options: ({ id, version }: {id: string, version: string}) => ({
      variables: {
        id,
        version,
      },
    }),
  }),
  withLoading()
)(ArticleProposed)
