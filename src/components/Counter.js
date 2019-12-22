import React, { useState } from "react";
import { connect } from "react-redux";
import { CounterButton } from "./CounterButton";

const Counter = (props, action) => {
  const [state, setState] = useState({
    counter: 0,
  });
  switch (action) {
    case "inc":
      setState(prevState => {
        return { counter: prevState++ };
      });
      break;
    case "dec":
      setState(prevState => {
        return { counter: prevState-- };
      });
      break;
    default:
      console.log("this cannnot be reached!");
  }
  return (
    <>
      <div>{state.counter}</div>
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
