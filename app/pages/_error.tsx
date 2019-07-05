import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import Error from "../containers/Error";
import { withRouter } from "next/router";

class ErrorPage extends React.Component {
  render() {
    return (
      <App>
        <Error />
      </App>
    );
  }
}

export default compose(
  withData,
  withApollo,
  withRouter
)(ErrorPage);
