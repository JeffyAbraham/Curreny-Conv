import React from "react";
import "./country-display.style.css";

const CountryDisplay = ({currencyName,symbol,flag,currency}) => {
  return (
    <div className="country-display-container">
      <div className="country-display-flex">
        <div className='currency-name-symbol'>
        <div>{symbol}</div>
        <div>{currencyName}</div>
        </div>
        <div>
          <img
            src={flag}
           width='70px'height='65px'
          />
        </div>
      </div>
     
    </div>
  );
};

export default CountryDisplay;
