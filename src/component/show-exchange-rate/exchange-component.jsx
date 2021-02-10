import { React, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { selectRates } from "../../redux/rates/rate-selector";
import "./exchange-component.css";

const Exchange = ({ rates, isLoading }) => {
  return (
    <div className="rates-container">
      {isLoading ? (
        <div>
          <Loader className='loader'
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <div>
          <div className="header-rates">Europe Euro € Exchange Rates</div>
          <div className="rates-table">
            <div className="table-desc-flex">
              <div className="item-title-1">Currency</div>
              <div className="item-title">Currency Name</div>
              <div className="item-title">Exchange Rate = 1EUR</div>
            </div>
            <div className="table-content">
              {Object.keys(rates).map((data) => {
                return (
                  <div className="table-desc-flex1">
                    <div className="item-title-1">{data}</div>
                    <div className="item-title">Currency Name unavailable </div>
                    <div className="item-title">{rates[data]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rates: selectRates(state),
  isLoading: state.rate.isLoading,
});

export default connect(mapStateToProps, null)(Exchange);
