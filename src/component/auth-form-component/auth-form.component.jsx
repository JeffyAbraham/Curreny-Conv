import { React, useState, useEffect } from "react";
import FormBox from "../form-component-component/form.component";
import CustomButton from "../custom-button-component/custombutton.component";
import "./auth-form.component.css";
import { signInWithGoogleMail } from "../../redux/user/user-action";
import GoogleButton from "react-google-button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user-selector";

const AuthForm = ({ signInWithGoogleMail, user, history }) => {
  //setForm can be used to change the state of form

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
      if(user)
      {
        alert('Signed in as '+user.displayName)
        history.push('/')
      }
  })

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
const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthForm)
);
