"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectRates = void 0;

var _reselect = require("reselect");

var selectRate = function selectRate(state) {
  return state.rate;
};

var selectRates = (0, _reselect.createSelector)([selectRate], function (selectRate) {
  return selectRate.dailyRa.rates;
});
exports.selectRates = selectRates;