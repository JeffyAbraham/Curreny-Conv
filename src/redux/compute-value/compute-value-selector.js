import { createSelector } from "reselect";
const selectExchangeRate = (state) => state.compute;

export const selectExchangeData = createSelector(
  [selectExchangeRate],
  (exchangeRate) => exchangeRate
);
