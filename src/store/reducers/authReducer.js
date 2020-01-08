import * as actionTypes from "../actions/actionTypes";

const initState = {
  authState: false,
  authError: null,
  isLoading: false,
  userName: "",
  userEmail: "",
  userPassword: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      console.log(action.payload);
      return {
        ...state,
        authState: true,
        authError: null,
        isLoading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        authState: true,
        authError: null,
        isLoading: false,
      };
    case actionTypes.AUTH_FAIL:
      console.log(action.payload);
      return {
        ...state,
        authState: false,
        authError: action.payload.message,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
