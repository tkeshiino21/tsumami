import { combineReducers } from "redux";
import alcReducer from "./alcReducer";
import authReducer from "./authReducer";
import beerReducer from "./beerReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  alc: alcReducer,
  auth: authReducer,
  beer: beerReducer,
});

export default rootReducer;
