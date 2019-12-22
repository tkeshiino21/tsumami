import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import RandomMessage from "./RandomMessage";

const Backgroud = styled.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const Title = styled.h1`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

const Layout = props => {
  return (
    <Backgroud>
      <Title>TSUMAMI</Title>
      <RandomMessage />
      <Sidebar />
      {props.children}
    </Backgroud>
  );
};

export default Layout;
