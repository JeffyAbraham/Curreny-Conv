import React from "react";
import FormBox from "../form-component/form.component";
import './currency-convertor.styles.css'

class CurrencyConverter extends React.Component {
  render() {
    return (
      <div className="currency-convertor-container">
        <div className="currency-convertor-group">
          <FormBox label="Currency" />
          <FormBox label="Enter the amount" />
          <span className='conversion-rate'>1 USD=0.83 EUR</span>
        </div>
        <div className="currency-convertor-group-1">
          <FormBox label="Currency" />
          <FormBox label="Enter the amount" />
          <span  className='conversion-rate'>1 EUR=1.94 EUR</span>
        </div>
      </div>
    );
  }
}
export default CurrencyConverter;
