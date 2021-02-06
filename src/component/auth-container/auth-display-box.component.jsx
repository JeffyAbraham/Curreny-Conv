import React from "react";
import AuthForm from "../auth-form/auth-form.component";
import Logo from "../title-component/title.component";
import "./auth-display-box.css";
import CustomButton from "../custom-button-component/custombutton.component";


const Container = () => {

  return (
    <div className="authentication-box-container">
      <div className="authentication-box-container-flex">
        <div className="authentication-box-logo">
          <Logo className='logo'/>
          <div className='slogan'>
          <span >A Dashboard for finance application</span>
          </div>
        </div>

        <div className="authentication-form">
          <div>
            <AuthForm />
          </div>
         
        </div>
        
      </div>
    </div>
  );
};
export default Container;
