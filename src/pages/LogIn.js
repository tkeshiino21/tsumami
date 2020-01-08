import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getFirestore, getFirebase, useFirestore } from "react-redux-firebase";
import "firebase/auth";
import firebase from "firebase/app";
import { authAction, firestorePush } from "../store/actions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  border: 1px solid white;
  height: 300px;
  width: 400px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20px;
  width: 300px;
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  width: 70px;
  margin-right: 10px;
`;

const ErrorMessage = styled.h3`
  color: red;
`;

const LogIn = () => {
  const fire = useFirestore();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const sign = () => {
    const email = state.email;
    const password = state.password;
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const addPost = () => {
    return fire.collection("todos").add({ name: "exampleTodo" });
  };

  const auth = useSelector(state => state.firebase.auth);
  const error = useSelector(state => state.auth.authError);

  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <Form onSubmit={handleSubmit} className="white">
        <InputField>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            onChange={e =>
              setState({ ...state, [e.target.id]: e.target.value })
            }></input>
        </InputField>
        <InputField>
          <Label htmlFor="email">password</Label>
          <input
            id="password"
            onChange={e =>
              setState({ ...state, [e.target.id]: e.target.value })
            }></input>
        </InputField>
        <button onClick={() => sign()}>LogIn</button>
        <button
          onClick={() =>
            dispatch(
              authAction({
                email: state.email,
                password: state.password,
                method: "login",
              })
            )
          }>
          LogIn
        </button>
      </Form>

      {console.log("firebase:", getFirebase())}
      {console.log("auth:", auth)}
      <ErrorMessage>{error}</ErrorMessage>
      <button onClick={addPost}></button>
      <button onClick={() => dispatch(firestorePush())}></button>
    </Layout>
  );
};

export default LogIn;
