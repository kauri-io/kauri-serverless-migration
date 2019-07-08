import Collection from "./View.jsx";
import { compose, graphql, withApollo } from "react-apollo";
import { globalCollectionDetails } from "../../queries/Collection";
import { connect } from "react-redux";
import { routeChangeAction } from "../../lib/Epics/RouteChangeEpic";
import withLoading from "../../lib/with-loading";
import withApolloError from "../../lib/with-apollo-error";
import { openModalAction } from "../../components/Modal/Module";
import { approveResourceAction } from "../Community/Module";

const mapStateToProps = (state) => {
  return {
    hostName: state.app && state.app.hostName,
    userId: state.app && state.app.user && state.app.user.id,
    communities: state.app && state.app.user && state.app.user.communities,
  };
};

export default compose(
  withApollo,
  connect(
    mapStateToProps,
    { routeChangeAction, openModalAction, approveResourceAction }
  ),
  graphql(globalCollectionDetails, {
    options: ({ id } : {id: string}) => ({
      variables: {
        id,
      },
    }),
  }),
  withLoading(),
  withApolloError()
)(Collection);
