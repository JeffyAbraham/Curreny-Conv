
import { createSelector } from "reselect";

const selectRate = (state) => state.rate;

export const selectRates = createSelector(
   
  [selectRate],
  (selectRate) => selectRate.dailyRa.rates
);

