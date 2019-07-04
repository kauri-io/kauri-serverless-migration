import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import Article from "../containers/Article";
import { withRouter } from "next/router";

interface IProps extends React.Component {
  router: any;
}

const MaterialArticle = ({ router }) => <App maxWidthConstrained={true}>
  <Article
    id={router.query.article_id}
    version={router.query.article_version}
  />
</App>

export default compose(
  withData,
  withApollo,
  withRouter
)(MaterialArticle);
