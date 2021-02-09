import React from "react";
import "./drop-down-style.css";
import "./drop-down-style.css";
import CountryDisplay from "../country-display.component.jsx/country-display.component";

class Dropdown extends React.Component {
  render() {
    const { currencies, initialValue, setCurrency, resetVal } = this.props;
    return (
      <div className="conversion-container">
        <div className='conversion-header'>Currency</div>
        <select onChange={(e) => {setCurrency(e.target.value);resetVal()}}>
          <option>
            {initialValue.currencyName} ({initialValue.currency})
          </option>
          {currencies.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.currencyName} ({item.currency})
              </option>
            );
          })}
        </select>
        <div className='display-country'>
         <CountryDisplay {...initialValue}/>
        </div>
        <div className="currency-info"></div>
      </div>
    );
  }
}

export default Dropdown;
