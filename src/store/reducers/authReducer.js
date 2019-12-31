import * as actionTypes from "../actions/actionTypes";

const initState = {
  authState: false,
  userName: "",
  userEmail: "",
  userPassword: "",
};

const authReducer = (state = initState, action) => {
  switch (actionTypes) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
