"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyC3nkCc768wRRgts4sluZZDEhy3LO9EXTY",
  authDomain: "currency-converter-1e9de.firebaseapp.com",
  projectId: "currency-converter-1e9de",
  storageBucket: "currency-converter-1e9de.appspot.com",
  messagingSenderId: "255210296731",
  appId: "1:255210296731:web:d2478073d7aea0fc59bd3e",
  measurementId: "G-ZHGJLFTSK2"
};

_app["default"].auth().signInWithEmailAndPassword(email, password).then(function (userCredentials) {
  console.log(userCredentials);
})["catch"](function (error) {
  console.log(error);
});

_app["default"].initializeApp(firebaseConfig);