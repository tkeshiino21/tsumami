import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { RandomMessage } from "./RandomMessage";

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContents = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 50px 0px 50px;
`;

const PageContainer = styled.div`
  padding: 50px 0 0 0;
`;

const Layout = props => {
  return (
    <Backgroud>
      <MainContainer>
        <Sidebar />

        <MainContents>
          <Title>TSUMAMI</Title>
          <RandomMessage />
          <PageContainer>{props.children}</PageContainer>
        </MainContents>
      </MainContainer>
    </Backgroud>
  );
};

export default Layout;
