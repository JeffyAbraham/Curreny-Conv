import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import currencyReducer from "./country-data/country-data-reducer";
import computeReducer from './compute-value/compute-value-reducer'
import rateReducer from "./rates/rate-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,
  compute:computeReducer,
  rate:rateReducer

});

export default rootReducer;
