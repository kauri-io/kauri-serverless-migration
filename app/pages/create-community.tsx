import React from "react";
import { withApollo, compose } from "react-apollo";
import { withRouter } from "next/router";
import withData from "../lib/with-data";
import App from "../layouts";
import CreateCommunityConnection from "../containers/CreateCommunity";

class CreateCommunity extends React.Component<{ router: any }> {
  render() {
    return (
      <App>
        <CreateCommunityConnection
          id={
            this.props.router &&
            this.props.router.query &&
            this.props.router.query.id
          }
        />
      </App>
    );
  }
}

export default compose(
  withData,
  withApollo,
  withRouter
)(CreateCommunity);
