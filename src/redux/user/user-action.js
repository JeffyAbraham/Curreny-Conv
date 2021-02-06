import { signInWithGoogle } from "../../firebase/firebase-utility";

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const signOutUser = () => ({
  type: "SET_CURRENT_USER",
});

export const setError = () => ({
  type: "SET_ERROR",
  payload: "Something went wrong.Please check your connection",
});

export const signInWithGoogleMail = () => {
  return (dispatch) => {
    signInWithGoogle()
      .then(({ user }) => {
        console.log(user.photoURL);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
