import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import currencyReducer from "./country-data/country-data-reducer";
import computeReducer from './compute-value/compute-value-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,
  compute:computeReducer

});

export default rootReducer;
