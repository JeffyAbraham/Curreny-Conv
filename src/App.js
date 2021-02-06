import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./component/header-component/header.component";
import HomePage from "./page/homepage/homepage";
import { connect } from "react-redux";

const App = (props) => {
  {
    console.log(props);
  }

  return (
    <div>
      <Header />
      <div className="page-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state,
});
export default connect(mapStateToProps, null)(App);
