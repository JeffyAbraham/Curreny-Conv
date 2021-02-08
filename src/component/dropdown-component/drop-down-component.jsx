import React from "react";
import "./drop-down-style.css";
import "./drop-down-style.css";
import CountryDisplay from "../country-display.component.jsx/country-display.component";

class Dropdown extends React.Component {
  render() {
  
    const { currencies,initialValue,setCurrency } = this.props;
    
  
    return (
      
      <div className="conversion-container">
        <select onChange={(e)=>setCurrency(e.target.value)}>
          <option>{initialValue.currencyName} ({initialValue.currency})</option>
          {currencies.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                
                {item.currencyName} ({item.currency})
              </option>
            );
          })}
        </select>
        <div>
          <CountryDisplay  {...initialValue}/>
        </div>
        <div className="currency-info">
          <span>{initialValue.currencyName}</span>
          <span>1 {initialValue.symbol} USD = 0.87 € EUR</span>
        </div>
      </div>
    );
  }
}

export default Dropdown;
