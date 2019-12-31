import React from "react";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import "firebase/auth";
import firebase from "firebase/app";

const LogOut = () => {
  const dispatch = useDispatch();
  const logout = () => {
    firebase.auth().signOut();
  };

  const auth = useSelector(state => state.firebase.auth);

  if (!auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <button onClick={() => logout()}>LogOut</button>
      <button onClick={() => dispatch(LogOut())}>LogOut</button>
      {console.log(firebase)}
      {console.log("auth:", auth)}
    </Layout>
  );
};

export default LogOut;
