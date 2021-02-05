import React from "react";
import "./form-component.styles.css";
const FormBox = ({ handleChange, label, ...otherprops }) => {
   
  return (
   
    <div className='form-input-container'>
       
     <div className="form-input-label">{label}</div>
      <input className="form-input-box" {...otherprops}  onChange={handleChange} />
      
    </div>
  );
};
export default FormBox;

//if label exist tyen change color
