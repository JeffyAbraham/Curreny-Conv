import { React, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { Switch, Route, Redirect } from "react-router-dom";
import Headers from "./component/header-component-component/header.component";
import HomePage from "./page/homepage/homepage";
import Exchange from "./component/show-exchange-rate/exchange-component";
import { getData } from "./redux/rates/rate-action";
import Authbox from "./component/auth-container-component/auth-display-box.component";

const App = ({ user, getData }) => {
  {
    useEffect(() => {
      getData();
    });
  }

  {
    console.log(user);
  }
  return (
    <div>
      <Headers />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/exchange" component={Exchange} />
        <Route exact path="/signin" component={Authbox} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
