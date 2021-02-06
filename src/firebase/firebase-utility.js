import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC3nkCc768wRRgts4sluZZDEhy3LO9EXTY",
    authDomain: "currency-converter-1e9de.firebaseapp.com",
    projectId: "currency-converter-1e9de",
    storageBucket: "currency-converter-1e9de.appspot.com",
    messagingSenderId: "255210296731",
    appId: "1:255210296731:web:d2478073d7aea0fc59bd3e",
    measurementId: "G-ZHGJLFTSK2"
  };

  
   auth=firebase.auth()


  firebase.initializeApp(firebaseConfig);

 

//export auth for authentication with user name and password
export const auth
