import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import currencyReducer from "./country-data/country-data-reducer";


const rootReducer = combineReducers({
  user: userReducer,
  currency: currencyReducer,

});

export default rootReducer;
