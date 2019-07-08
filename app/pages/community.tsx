import React from "react";
import { withApollo, compose } from "react-apollo";
import withData from "../lib/with-data";
import App from "../layouts";
import Community from "../containers/Community";
import { withRouter } from "next/router";

const CommunityPage = ({ router }) => 
  <App>
    <Community
      secret={this.props.router && this.props.router.query.secret}
      communityId={this.props.router && this.props.router.query.communityId}
    />
  </App>


export default compose(
  withData,
  withApollo,
  withRouter
)(CommunityPage);
