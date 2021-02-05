import React from "react";
import AuthContainer from "./component/auth-container/auth-display-box.component";
import Axios from "axios";
import './App.css'
import Homepage from './page/homepage/homepage'
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './component/header-component/header.component'
import HomePage from "./page/homepage/homepage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currencyRate: "",
      currentUser:'Jeffy Abraham'
    };
  }

  componentDidMount() {
    Axios.get(
      "https://v6.exchangerate-api.com/v6/09387663c4aa2afdb290cafa/pair/EUR/GBP"
    ).then((res, err) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser}/>
        <div className='page-container'>
        <Switch>
        <Route exact path="/" component={HomePage} />

         
     
        </Switch>
        </div>
      </div>
    );
  }
}
export default App;
