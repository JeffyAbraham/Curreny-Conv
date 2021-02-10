"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.startGetData = exports.setRates = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setRates = function setRates(data) {
  return {
    type: "SET_RATE",
    payload: data
  };
};

exports.setRates = setRates;

var startGetData = function startGetData() {
  return {
    type: "START_ASYNC"
  };
};

exports.startGetData = startGetData;

var getData = function getData() {
  return function (dispatch) {
    startGetData();

    _axios["default"].get("https://api.exchangeratesapi.io/latest").then(function (res) {
      dispatch(setRates(res.data));
    })["catch"](function (err) {
      console.log(err);
    });
  };
};

exports.getData = getData;