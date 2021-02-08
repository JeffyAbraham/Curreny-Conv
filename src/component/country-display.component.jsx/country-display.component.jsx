import React from "react";
import "./country-display.style.css";

const CountryDisplay = ({flag,symbol,currency}) => {
  console.log(symbol)
  return (
    <div className="country-display-container">
      <div className='country-display-flex'>
        <div>{symbol} {currency}</div>
        <div>
          <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-400.png"  width='30px'height='20px'/>
        </div>
      </div>
      <div>
        <div>
          <input className='amount-container' type="number" defaultValue="1" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CountryDisplay;
