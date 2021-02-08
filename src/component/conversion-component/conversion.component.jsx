import React from "react";
import Dropdown from "../dropdown-component/drop-down-component";
import "./conversion.component.style.css";
import { connect } from "react-redux";
import {
  setBaseCurrency,
  setTargetCurrency,
} from "../../redux/country-data/country-data-action";

class Conversion extends React.Component {
  render() {
    const {
      currencyDetails,
      baseCurrency,
      targetCurrency,
      setBaseCurrency,
      setTargetCurrency
    } = this.props;

    return (
      <div className="conversion-component-container-main">
        <div className="conversion-component-container">
          <div>
            <Dropdown
              tag="Base"
              setCurrency={setBaseCurrency}
              currencies={currencyDetails}
              initialValue={baseCurrency}
            />
          </div>
          <div>
            <Dropdown
              setCurrency={setTargetCurrency}
              tag="Target"
              currencies={currencyDetails}
              initialValue={targetCurrency}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  currency: { currencyDetails, baseCurrency, targetCurrency },
}) => ({
  currencyDetails,
  baseCurrency,
  targetCurrency,
});
const mapDispatchToProps = (dispatch) => ({
  setBaseCurrency: (id) => dispatch(setBaseCurrency(id)),
  setTargetCurrency: (id) => dispatch(setTargetCurrency(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversion);
