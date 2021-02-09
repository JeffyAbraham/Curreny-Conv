import { createSelector } from "reselect";


const selectCurrencyData = (state) => state.currency;
console.log(selectCurrencyData)
export const selectBaseCurrency = createSelector(
  [selectCurrencyData],
  (currency) => currency.selectBaseCurrency
);

export const selectCurrencyDetails = createSelector(
  [selectCurrencyData],
  (currency) => currency.currencyDetails
);

export const selectTargetCurrency = createSelector(
  [selectCurrencyData],
  (currency) => currency.selectTargetCurrency
);
