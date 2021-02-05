import React from "react";
import AuthForm from "../auth-form/auth-form.component";
import Logo from "../title-component/title.component";
import "./auth-display-box.css";
import FormBox from "../form-component/form.component";

const Container = () => {
  return (
    <div className="authentication-box-container">
      <div className="authentication-box-container-flex">
        <div className="authentication-box-logo">
          <Logo />
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
