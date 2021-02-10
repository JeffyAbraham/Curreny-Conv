import filterById from "./country-data-utility-function";
import { currencyData } from "./data";
const INITIAL_STATE = {
  baseCurrency: {
    id: 9,
    currency: "CNY",
    currencyName: "Chinese Yuan",
    symbol: "¥",
    flag:
      "https://www.countryflags.io/CN/shiny/64.png",
  },

  currencyDetails: currencyData,
  targetCurrency: {
    id: 3,
    currency: "GBP",
    currencyName: "British Pound",
    symbol: "£",
    flag:
      "https://www.countryflags.io/GB/shiny/64.png",
  },
};
export const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_BASE_CURRENCY":
      return {
        ...state,
        baseCurrency: filterById(state.currencyDetails, action.payload),
      };

    case "SET_TARGET_CURRENCY":
      return {
        ...state,
        targetCurrency: filterById(state.currencyDetails, action.payload),
      };
    default:
      return state;
  }
};
export default currencyReducer;
