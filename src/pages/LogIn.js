import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import "firebase/auth";
import firebase from "firebase/app";

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

const LogIn = () => {
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

  const auth = useSelector(state => state.firebase.auth);

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
      </Form>
      <button onClick={() => dispatch(LogIn(state))}>LogIn</button>
      {console.log(firebase)}
      {console.log("auth:", auth)}
    </Layout>
  );
};

export default LogIn;
