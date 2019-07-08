import View from "./View.jsx";
import { connect } from "react-redux";
import { routeChangeAction } from "../../lib/Epics/RouteChangeEpic";
import { showNotificationAction } from "../../lib/Epics/ShowNotificationEpic"

const mapStateToProps = (state) => ({
  userId: state.app.user && state.app.user.id,
  user: state.app.user,
});

export default connect(
  mapStateToProps,
  { routeChangeAction, showNotificationAction }
)(View);
