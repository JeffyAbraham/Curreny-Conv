import React from "react";
import CustomButton from "../custom-button-component/custombutton.component";
import UserAvatar from "../user-avatar-component/user-avatar.component";
import "./header.styles.css";
const Header = () => {
  {
    console.log();
  }
  return (
    <div className="navbar-container">
      <div className="navbar-container-flex">
        <div>
          <CustomButton>CURRENCY CONVERTER</CustomButton>
        </div>
        <div>
          <CustomButton>CURRENT EXCHANGE RATES</CustomButton>
        </div>
      </div>

      <div>{<UserAvatar />}</div>
    </div>
  );
};
export default Header;
