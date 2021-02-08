import React, { useState } from "react";
import FormBox from "../form-component-component/form.component";
import CustomButton from "../custom-button-component/custombutton.component";
import "./auth-form.component.css";
import { signInWithGoogleMail } from "../../redux/user/user-action";
import GoogleButton from "react-google-button";
import { connect } from "react-redux";

const AuthForm = ({ signInWithGoogleMail }) => {
  //setForm can be used to change the state of form

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email == "" || form.password == "") {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="form-content">
      <div>
        <form>
          <FormBox
            type="email"
            name="email"
            handleChange={handleChange}
            label="E-mail"
            value={form.email}
          />
          <FormBox
            type="password"
            name="password"
            handleChange={handleChange}
            label="Password"
            value={form.password}
          />
          <div className="button-form" onClick={handleSubmit}>
            <CustomButton>LOG IN</CustomButton>
          </div>
        </form>
      </div>
      <div className="google-button">
        <GoogleButton
          style={{ outline: "none", width: "240px" }}
          onClick={signInWithGoogleMail}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogleMail: () => dispatch(signInWithGoogleMail()),
});

export default connect(null, mapDispatchToProps)(AuthForm);
