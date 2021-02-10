import React from "react";
import "./user-avatar.styles.css";
const UserAvatar = ({ userName,userPic }) => {
  return (
    <div className='user-avatar-container'>
      <button className='user-avatar'>
      <span>{userName}</span>
      <span>{userPic}</span>
      </button>
    
    </div>
  );
};

export default UserAvatar;
