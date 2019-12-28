import { combineReducers } from "redux";
import reducer from "./reducer";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const rootReducer = combineReducers({
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
  reducer,
});

export default rootReducer;
