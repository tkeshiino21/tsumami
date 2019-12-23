import React from "react";
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
      <hr />
      <button onClick={props.onStoreResult}>storeResult</button>
      <ul>
        {props.storedResults.map(strResult => (
          <li
            key={strResult.id}
            onClick={() => props.onDeleteResult(strResult.id)}>
            {strResult.value}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", val: 10 }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT", val: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULT", resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
