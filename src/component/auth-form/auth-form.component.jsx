import React from "react";
import FormBox from "../form-component/form.component";
import CustomButton from '../custom-button-component/custombutton.component'

class AuthForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email } = this.state;
    alert(userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormBox
            type="text"
            name="userName"
            handleChange={this.handleChange}
            label="Username"
            value={this.state.userName}
          />
          <FormBox
            type="E-mail"
            name="email"
            handleChange={this.handleChange}
            label="E-mail"
            value={this.state.email}
          />
         <CustomButton/>
        </form>
      </div>
    );
  }
}
export default AuthForm;
