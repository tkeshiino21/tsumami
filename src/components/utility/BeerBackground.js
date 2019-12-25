import React from "react";
import styled, { keyframes } from "styled-components";

export const BeerBackground = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${props => props.inputColor || "#000"};
  height: ${props => props.inputHeight || "0px"};
  width: 100%;
  margin-left: -50px;
`;

export const beerColor = ({ level }) => {
  switch (level) {
    case 6:
      return "red";
    case 5:
      return "orangered";
    case 4:
      return "darkorange";
    case 3:
      return "orange";
    case 2:
      return "#FFBB00";
    case 1:
      return "gold";
    default:
      return "#000";
  }
};

export const beerHeight = ({ level }) => {
  switch (level) {
    case 6:
      return "100vh";
    case 5:
      return "80vh";
    case 4:
      return "60vh";
    case 3:
      return "40vh";
    case 2:
      return "20vh";
    case 1:
      return "10vh";
    default:
      return "0";
  }
};

const fadeIn = keyframes`
  0% { transform: translateY(0px); }
  100% { transform: translateY(-40vh); opacity: 0; }
`;

const Bubble = styled.div`
  display: block;
  width: ${props => props.inputSize || "0px"};
  height: ${props => props.inputSize || "0px"};
  border-radius: 100%;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.6) inset;
  animation: ${fadeIn} 5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s infinite normal;
  position: absolute;
  animation-delay: ${props => props.inputDelay || "5s"};
  bottom: -50px;
  left: ${props => props.inputPositon || "30vw"};
  /* 光の反射する部分 */
  :after {
    content: "";
    display: block;
    width: 20%;
    height: 20%;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    right: 15%;
    top: 15%;
    filter: blur(2px);
    transform: rotateZ(45deg) scaleY(0.8);
  }
`;

const Bubbles = () => {
  return (
    <>
      {/* TODO: refactor:もっと上手く書けそう */}
      <Bubble inputSize="15px" inputPositon="90vw" inputDelay="4s" />
      <Bubble inputSize="12px" inputPositon="40vw" inputDelay="6s" />
      <Bubble inputSize="10px" inputPositon="60vw" inputDelay="2s" />
      <Bubble inputSize="7px" inputPositon="70vw" inputDelay="3s" />
      <Bubble inputSize="5px" inputPositon="80vw" inputDelay="4s" />
      <Bubble inputSize="15px" inputPositon="80vw" inputDelay="1s" />
      <Bubble inputSize="12px" inputPositon="30vw" inputDelay="4s" />
      <Bubble inputSize="10px" inputPositon="50vw" inputDelay="5s" />
      <Bubble inputSize="7px" inputPositon="100vw" inputDelay="1s" />
      <Bubble inputSize="15px" inputPositon="70vw" inputDelay="0s" />
    </>
  );
};

export default Bubbles;
