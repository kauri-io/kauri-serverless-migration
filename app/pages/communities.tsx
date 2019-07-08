import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import Communities from "../containers/Discover/Communities";
import { withRouter } from "next/router";

const CommunitiesPage = ({ router }) => <App>
    <Communities />
  </App>

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
  withRouter
)(CommunitiesPage);
