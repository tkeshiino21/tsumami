import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import "firebase/auth";
import { authAction } from "../store/actions";

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

const SignUpForm = props => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = useCallback(
    e => {
      setInputForm({ ...inputForm, [e.target.id]: e.target.value });
    },
    console.log(inputForm),
    [setInputForm]
  );
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authAction({
        payload: {
          email: inputForm.email,
          password: inputForm.password,
          name: inputForm.name,
          method: "signup",
        },
      })
    );
  };
  return (
    <Form onSubmit={handleSubmit} className="white">
      <InputField>
        <Label htmlFor="name">Name</Label>
        <input type="text" id="name" onChange={handleChange}></input>
      </InputField>
      <InputField>
        <Label htmlFor="email">Email</Label>
        <input type="email" id="email" onChange={handleChange}></input>
      </InputField>
      <InputField>
        <Label htmlFor="password">password</Label>
        <input type="text" id="password" onChange={handleChange}></input>
      </InputField>
      <button type="submit">SignUP</button>
    </Form>
  );
};

const SignUp = () => {
  const auth = useSelector(state => state.firebase.auth);
  // if (auth.uid) {
  //   return <Redirect to="/" />;
  // }
  return (
    <Layout>
      <SignUpForm />

      {console.log("auth:", auth)}
    </Layout>
  );
};

export default SignUp;
