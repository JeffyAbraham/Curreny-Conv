import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Authbox from "./component/auth-container-component/auth-display-box.component";
import { selectCurrentUser } from "./redux/user/user-selector";
import HomePage from "./page/homepage/homepage";

const App = ({ user }) => {
  return (
    <div>
      <div className="page-container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (user ? <Redirect to="/" /> : <HomePage />)}
          />
          <Route exact path="/" render={() => <Authbox />} />

          <Authbox />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});
export default connect(mapStateToProps, null)(App);
