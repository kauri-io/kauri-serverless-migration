import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts/MaterialLayout";
import Article from "../components/containers/Article";
import { withRouter } from "next/router";

class ViewArticle extends React.Component {
  static async getInitialProps (context, apolloClient) {
    return {};
  }

  render () {
    return (
      <App url={this.props.router} navcolor="transparent">
        <Article
          proposedCommunityId={this.props.router.query["proposed-community-id"]}
          id={this.props.router.query["article_id"]}
          version={this.props.router.query["article_version"]}
        />
      </App>
    );
  }
}

export default compose(
  withData,
  withApollo,
  withRouter
)(ViewArticle);
