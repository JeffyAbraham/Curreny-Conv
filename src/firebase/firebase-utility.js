import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3nkCc768wRRgts4sluZZDEhy3LO9EXTY",
    authDomain: "currency-converter-1e9de.firebaseapp.com",
    projectId: "currency-converter-1e9de",
    storageBucket: "currency-converter-1e9de.appspot.com",
    messagingSenderId: "255210296731",
    appId: "1:255210296731:web:d2478073d7aea0fc59bd3e",
    measurementId: "G-ZHGJLFTSK2"
  };
  firebase.initializeApp(firebaseConfig);
  
  const auth=firebase.auth()


   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: "select_account" });
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

  

 


