"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogleMail = exports.setError = exports.signOutUser = exports.setCurrentUser = void 0;

var _firebaseUtility = require("../../firebase/firebase-utility");

var setCurrentUser = function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  };
};

exports.setCurrentUser = setCurrentUser;

var signOutUser = function signOutUser() {
  return {
    type: "SET_CURRENT_USER"
  };
};

exports.signOutUser = signOutUser;

var setError = function setError() {
  return {
    type: "SET_ERROR",
    payload: "Something went wrong.Please check your connection"
  };
};

exports.setError = setError;

var signInWithGoogleMail = function signInWithGoogleMail() {
  return function (dispatch) {
    (0, _firebaseUtility.signInWithGoogle)().then(function (_ref) {
      var user = _ref.user;
      alert(user.displayName);
    })["catch"](function (err) {
      alert(err);
    });
  };
};

exports.signInWithGoogleMail = signInWithGoogleMail;