"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

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

_app["default"].initializeApp(firebaseConfig);

var auth = _app["default"].auth();

var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;