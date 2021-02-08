import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Authbox from "./component/auth-container-component/auth-display-box.component";
import Dropdown from "./component/dropdown-component/drop-down-component";
import Conversion from "./component/conversion-component/conversion.component";

const App = ({ user }) => {
  return (
    <div>
      <div className="page-container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (user.currentUser ? <div></div> : <Conversion />)}
          />
          <Authbox />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps, null)(App);
