import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import Collections from "../containers/Discover/Collections";

const CollectionsPage = () => <App>
    <Collections />
  </App>

export default compose(
  // withData gives us server-side graphql queries before rendering
  withData,
  // withApollo exposes `this.props.client` used when logging out
  withApollo,
)(CollectionsPage);
