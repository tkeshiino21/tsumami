import rootReducer from "./reducers/rootReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

const middlewares = [thunk.withExtraArgument(getFirebase, getFirestore)];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), composeWithDevTools())
  );
  return store;
};

export default configureStore;
