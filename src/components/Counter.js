import React, { useState } from "react";
import { connect } from "react-redux";
import { CounterButton } from "./utility/CounterButton";

const Counter = (props, action) => {
  return (
    <>
      <h1>counter:{props.ctr}</h1>
      <CounterButton onClick={props.onIncrementCounter}>INC</CounterButton>
      <CounterButton onClick={props.onDecrementCounter}>DEC</CounterButton>
      <CounterButton onClick={props.onAddCounter}>ADD</CounterButton>
      <CounterButton onClick={props.onSubtractCounter}>SUBTRACT</CounterButton>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", val: 10 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", val: 15 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
