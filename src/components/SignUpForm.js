import React, { useCallback } from "react";

const Forms = () => {
  return (
    <form className={props.className}>
      <input
        name="name"
        type="text"
        value={props.name}
        onChange={props.onChangeName}
      />
      <input
        name="password"
        type="password"
        value={props.password}
        onChange={props.onChangePassword}
      />
      <input
        name="email"
        type="email"
        value={props.email}
        onChange={props.onChangeemail}
      />
    </form>
  );
};

const SignUpForm = () => {
  const onChangeName = useCallback(
    e => {
      setLastName(e.target.value);
    },
    [name]
  );
  const onChangeEmail = useCallback(
    e => {
      setComment(e.target.value);
    },
    [email]
  );
  const onChangePassword = useCallback(
    e => {
      set(e.target.value);
    },
    [password]
  );
  return (
    <Component
      firstName={firstName}
      lastName={lastName}
      comment={comment}
      address={address}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeComment={onChangeComment}
      onChangeAddress={onChangeAddress}
    />
  );
};

export default SignUpForm;
