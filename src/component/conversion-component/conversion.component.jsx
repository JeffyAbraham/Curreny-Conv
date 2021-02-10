import { React, useEffect, useState } from "react";
import Dropdown from "../dropdown-component/drop-down-component";
import "./conversion.component.style.css";
import { connect } from "react-redux";
import {
  setBaseCurrency,
  setTargetCurrency,
} from "../../redux/country-data/country-data-action";
import { makeApiReq } from "../../redux/compute-value/compute-value-action";

function Conversion({
  currencyDetails,
  baseCurrency,
  targetCurrency,
  setBaseCurrency,
  setTargetCurrency,
  makeApiReq,
  ExchangeRate,
}) {
  const [form, setForm] = useState({
    baseInputValue: 0,
    targetInputValue: 0,
  });

  const handleChangeTarget = (e) => {
    if (e.target.value < 0) {
      alert("Number should be positive");
    }
    setForm({
      ...form,
      baseInputValue: (e.target.value * ExchangeRate).toFixed(2),
      targetInputValue: e.target.value,
    });
  };
  const handleChangeBase = (e) => {
    setForm({
      ...form,
      baseInputValue: e.target.value,
      targetInputValue: (e.target.value / ExchangeRate).toFixed(2),
    });
    console.log(form);
  };
  const resetValue = () => {
    setForm({
      ...form,
      baseInputValue: 0,
      targetInputValue: 0,
    });
  };

  useEffect(() => {
    makeApiReq(baseCurrency.currency, targetCurrency.currency);
  });
  return (
    <div className="conversion-component-container-main">
      <div className="currency-conv">
        <div>Currency converter</div>
        <div>
          <span className="header-span">
            Please enter the amount you want to convert in any field.
          </span>
        </div>
      </div>

      <div className="conversion-component-container">
        <div className="converion-component-dropdown">
          <div>
            <Dropdown
              tag="Base"
              setCurrency={setBaseCurrency}
              currencies={currencyDetails}
              initialValue={baseCurrency}
              resetVal={resetValue}
            />
          </div>
          <div>
            <input
              className="amount-container"
              type="number"
              value={form.baseInputValue}
              onChange={(e) => handleChangeBase(e)}
            />
          </div>
        </div>
        <div className="converion-component-dropdown">
          <div>
            <Dropdown
              setCurrency={setTargetCurrency}
              tag="Target"
              currencies={currencyDetails}
              initialValue={targetCurrency}
              resetVal={resetValue}
            />
          </div>
          <div>
            <input
              className="amount-container"
              value={form.targetInputValue}
              type="number"
              onChange={(e) => handleChangeTarget(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({
  compute: { ExchangeRate },
  currency: { currencyDetails, baseCurrency, targetCurrency },
}) => ({
  currencyDetails,
  baseCurrency,
  targetCurrency,
  ExchangeRate,
});
const mapDispatchToProps = (dispatch) => ({
  setBaseCurrency: (id) => dispatch(setBaseCurrency(id)),
  setTargetCurrency: (id) => dispatch(setTargetCurrency(id)),
  makeApiReq: (base, target) => dispatch(makeApiReq(base, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversion);
