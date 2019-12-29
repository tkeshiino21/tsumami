import { combineReducers } from "redux";
import reducer from "./reducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  reducer,
  authReducer,
});

export default rootReducer;
