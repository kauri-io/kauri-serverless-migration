import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import ArticleApproved from "../containers/ArticleApproved";
import theme from "../lib/theme-config";
import { withRouter } from "next/router";

const ArticleApprovedPage = () =>
  <App>
    <ArticleApproved
      type="published"
      article_id={this.props.router.query.article_id}
      article_version={this.props.router.query.article_version}
    />
  </App>

export default compose(
  withData,
  withApollo,
  withRouter
)(ArticleApprovedPage);
