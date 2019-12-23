import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { CounterButton } from "../components/utility/CounterButton";
import Bubbles, {
  BeerBackground,
  beerColor,
  beerHeight,
} from "../components/utility/BeerBackground";
import styled from "styled-components";

const Float = styled.div`
  position: relative;
  z-index: 1;
`;

const Auth = props => {
  const [volume, setVolume] = useState("0");
  const [can, setCan] = useState("0");
  const dangerLevel = () => {
    if (props.ctr * 1 >= 5) {
      return 5;
    }
    if (props.ctr * 1 >= 4) {
      return 4;
    }
    if (props.ctr * 1 >= 3) {
      return 3;
    }
    if (props.ctr * 1 >= 2) {
      return 2;
    }
    if (props.ctr * 1 >= 1) {
      return 1;
    } else {
      return 0;
    }
  };
  const CounterButtons = () => {
    return (
      <>
        <CounterButton onClick={props.onDecrementCounter}>-</CounterButton>
        <CounterButton onClick={props.onIncrementCounter}>+</CounterButton>
      </>
    );
  };
  return (
    <Layout>
      <BeerBackground
        inputColor={beerColor({ level: dangerLevel() })}
        inputHeight={beerHeight({ level: dangerLevel() })}
      />
      {props.ctr * 1 >= 1 ? <Bubbles /> : null}
      <Float>
        <h1>counter:{props.ctr}</h1>
        <div className="drinkAtHome">
          <h5>宅飲み</h5>
          <select
            name="サイズ"
            value={can}
            onChange={e => setCan(e.target.value)}>
            <option value="0">選択してください。</option>
            <option value="135">ショート缶</option>
            <option value="350">通常缶</option>
            <option value="500">ロング缶</option>
          </select>
          <CounterButtons />
        </div>
        <div className="drinkOutside">
          <h5>外飲み</h5>
          <select
            name="サイズ"
            value={volume}
            onChange={e => setVolume(e.target.value)}>
            <option value="0">選択してください。</option>
            <option value="300">小ジョッキ</option>
            <option value="500">中ジョッキ</option>
            <option value="800">大ジョッキ </option>
          </select>
          <CounterButtons />
        </div>
        <hr />
        <button onClick={props.onStoreResult}>storeResult</button>
        {props.onStoreResult}
        <ul>
          {props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => props.onDeleteResult(strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </Float>
    </Layout>
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
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULT", resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
