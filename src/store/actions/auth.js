import * as actionTypes from "./actionTypes";

export const logIn = emailAndPassword => {
  return { type: actionTypes.SELECT_BEER, payload: emailAndPassword };
};

export const signUp = emailAndPassword => {
  return { type: actionTypes.SELECT_BEER, ingredientName: emailAndPassword };
};

export const logOut = emailAndPassword => {
  return { type: actionTypes.SELECT_BEER, ingredientName: emailAndPassword };
};

// const auth = e => {
//   firebase.auth().createUserWithEmailAndPassword(email, password);
// };
