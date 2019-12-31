import { combineReducers } from "redux";
import alcReducer from "./alcReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  alc: alcReducer,
  auth: authReducer,
});

export default rootReducer;
