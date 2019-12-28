import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import store from "./store/setupStore";

const fbConfig = {
  apiKey: "AIzaSyBjpRO3PE342J_0VhwYWIU7FWuMJVMwT7M",
  authDomain: "tsumami-sakana.firebaseapp.com",
  databaseURL: "https://tsumami-sakana.firebaseio.com",
  projectId: "tsumami-sakana",
  storageBucket: "tsumami-sakana.appspot.com",
  messagingSenderId: "70735986675",
  appId: "1:70735986675:web:a3bc14a19284ece4a75c86",
  measurementId: "G-HGC9B8C0PZ",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
