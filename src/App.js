import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Authbox from '../src/component/auth-container/auth-display-box.component'


const App = (props) => {
  {
    console.log(props);
  }


  return (
    <div>
     
      <div className="page-container">
        <Authbox/>
         
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state,
});
export default connect(mapStateToProps, null)(App);
