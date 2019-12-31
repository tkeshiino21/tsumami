import React, { useMemo } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { CounterButton } from "../components/utility/CounterButton";
import Bubbles, {
  BeerBackground,
  beerColor,
  beerHeight,
} from "../components/utility/BeerBackground";
import { InlineContainer } from "../components/utility/Container";
import styled from "styled-components";
import dangerJudge from "../components/AlchoolCalc";
import { addBeer, removeBeer } from "../store/actions/index";

const Float = styled.div`
  position: relative;
  z-index: 999;
`;

const Emoji = styled.h1`
  position: fixed;
  font-size: 128px;
  top: -50px;
  right: 10px;
  opacity: 0.5;
  z-index: -1;
`;

const Auth = props => {
  const totalAlc = useSelector(state => state.alc.totalAlcohol);
  const beers = useSelector(state => state.alc.beers);
  const dispatch = useDispatch();
  const pureAlcWeight = Math.floor(totalAlc * 0.05 * 0.8);
  const drinkUnit = pureAlcWeight / 10;
  const alcDuration = drinkUnit * 2;
  const data = useMemo(
    () =>
      dangerJudge(drinkUnit).map(item => {
        return item.level;
      }),
    [drinkUnit]
  );

  const optionsAtHome = [
    {
      name: "ショート缶",
      value: "shortCan",
    },
    {
      name: "レギュラー缶",
      value: "regularCan",
    },
    {
      name: "ロング缶",
      value: "longCan",
    },
  ];
  const optionsOutside = [
    {
      name: "グラス",
      value: "glass",
    },
    {
      name: "中ジョッキ",
      value: "regularBeerMug",
    },
    {
      name: "大ジョッキ",
      value: "tallBeerMug",
    },
  ];
  const CounterButtons = ({ options }) => {
    return (
      <>
        {options.map((item, index) => {
          return (
            <InlineContainer key={index}>
              <p style={{ width: "100px", border: "1px solid #fff" }}>
                {item.name}
              </p>
              <CounterButton onClick={() => dispatch(removeBeer(item.value))}>
                -
              </CounterButton>
              <CounterButton onClick={() => dispatch(addBeer(item.value))}>
                +
              </CounterButton>
              <p>{beers[item.value] > 0 ? beers[item.value] : null}</p>
            </InlineContainer>
          );
        })}
      </>
    );
  };
  return (
    <Layout>
      <BeerBackground
        inputColor={beerColor({ level: data * 1 })}
        inputHeight={beerHeight({ level: data * 1 })}
      />
      {totalAlc > 0 ? <Bubbles /> : null}
      <Float>
        {dangerJudge(drinkUnit).map((item, index) => {
          return (
            <div key={index}>
              <h3 style={{ marginBottom: "4px" }}>
                状態：<span>{item.name}</span>
              </h3>
              <p>{item.discription}</p>
              <p>{item.advice}</p>
              <Emoji>{item.emoji}</Emoji>
            </div>
          );
        })}
        <br />
        <p>
          ビールの量：<span>{totalAlc}</span>ml
          {console.log(beers)}
        </p>
        <p>
          純アルコール量：
          <span>{pureAlcWeight}</span>g（{drinkUnit}ドリンク）
        </p>
        <p>
          回復までにかかる時間：
          <span>{alcDuration}</span>時間
        </p>
        <form className="drinkAtHome">
          <h5 style={{ marginBottom: "2px" }}>宅飲み</h5>
          <CounterButtons options={optionsAtHome} />
        </form>
        <div className="drinkOutside">
          <h5 style={{ marginBottom: "2px" }}>外飲み</h5>
          <CounterButtons options={optionsOutside} />
        </div>
        <br />
        <small>⚠︎アルコールの影響には個人差があります。</small>
      </Float>
    </Layout>
  );
};

export default Auth;
