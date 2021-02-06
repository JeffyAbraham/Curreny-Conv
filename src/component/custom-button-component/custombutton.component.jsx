import React from 'react';

import './custombutton.style.scss';
     
const CustomButton = ({ children, isGoogleSignIn,isInverted, ...otherProps }) => (
  <button
    className={`${isInverted?'isInverted':''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;