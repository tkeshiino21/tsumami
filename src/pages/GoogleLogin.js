import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import GoogleButton from "react-google-button"; // optional
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";

const LogIn = () => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  return (
    <Layout>
      This is LogIn Page!{console.log(auth)} <GoogleButton />
      <button onClick={loginWithGoogle}>Login With Google</button>) : (
      <pre>{JSON.stringify(auth, null, 2)}</pre>
      <StyledFirebaseAuth
        uiConfig={{
          signInFlow: "popup",
          signInSuccessUrl: "/signedIn",
          signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
          callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
              firebase.handleRedirectResult(authResult).then(() => {
                // history.push(redirectUrl); if you use react router to redirect
              });
              return false;
            },
          },
        }}
        firebaseAuth={firebase.auth()}
      />
    </Layout>
  );
};

export default LogIn;
