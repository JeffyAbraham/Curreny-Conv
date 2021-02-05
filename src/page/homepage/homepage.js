import React from "react";
import "./homepage.css";
import "../../component/form-component/form.component";
import CurrencyConverter from "../../component/currency-converter-component/currency-convertor.component";

const HomePage = () => {
  return (
    <div className='homepage-container'> 
      <div className="homepage-title-flex-container">
        <div>
        <div className="homepage-title">
          <h3>Currency Converter</h3>
          <span className="homepage-title-one">
          Please enter the amount you want to convert to in any field
        </span>
        
        </div>
      
      
      </div>
      </div>
      <div className="currency-converter">
        <CurrencyConverter/>
      </div>
    </div>
  );
};
export default HomePage;
