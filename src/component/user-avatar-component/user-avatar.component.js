import React from "react";
import "./user-avatar.styles.css";
const UserAvatar = ({ userName }) => {
  return (
    <div className='user-avatar-container'>
      <button className='user-avatar'>
        <span>J A</span>
      </button>
      <span>Jeffy Abraham</span>
    </div>
  );
};

export default UserAvatar;
