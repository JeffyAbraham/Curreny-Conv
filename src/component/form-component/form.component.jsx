import React from "react";
import './form-component.styles.scss'
const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherprops} />
      { //if label exist then shrink the interior text we are making it resuable
          label?(<label className={`${otherprops.value.length?'shrink':''}form-input-label`}>{label}</label>):null
      }
    </div>
  );
};

export default FormInput;