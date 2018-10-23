import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as userActions } from "State/user";
import { actions as navbarLinksActions } from "State/navbarLinks";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import { NotificationContainer } from "@boomerang/boomerang-components/lib/Notifications";
import WorkflowsViewer from "Features/WorkflowsViewer";
import WorkflowManager from "Features/WorkflowManager";
import { BASE_LAUNCHPAD_SERVICE_URL } from "Config/servicesConfig";
import "./styles.scss";

class App extends Component {
  componentDidMount() {
    this.fetchData();
  }

  refreshPage = () => {
    this.fetchData();
  };

  fetchData = () => {
    this.props.userActions.fetch(`${BASE_LAUNCHPAD_SERVICE_URL}/users`);
    this.props.navbarLinksActions.fetch(`${BASE_LAUNCHPAD_SERVICE_URL}/navigation`);
  };

  render() {
    return (
      <>
        <Navbar user={this.props.user} navbarLinks={this.props.navbarLinks} refresh={this.refreshPage} />
        <main className="c-app-main">
          <Switch>
            <Route path="/viewer" component={WorkflowsViewer} />
            <Route path="/editor" component={WorkflowManager} exact />
            <Route path="/editor/:workflowId" component={WorkflowManager} />
            <Redirect from="/" to="/viewer" />
          </Switch>
        </main>
        <NotificationContainer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    navbarLinks: state.navbarLinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    navbarLinksActions: bindActionCreators(navbarLinksActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);