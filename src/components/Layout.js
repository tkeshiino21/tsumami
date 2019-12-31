import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Backgroud = styled.div`
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const FlexColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  align-items: center;
`;

const Layout = props => {
  const initialState = () => {
    if (matchMedia("(max-width: 798px)").matches) {
      return false;
    } else {
      return true;
    }
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(initialState());
  const SidebarTogglers = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <Backgroud>
      <MainContainer>
        {sidebarIsOpen ? <Sidebar handleClick={SidebarTogglers} /> : null}
        <FlexColumnContainer>
          <Header handleClick={SidebarTogglers} />
          <MainContents>{props.children}</MainContents>
        </FlexColumnContainer>
      </MainContainer>
    </Backgroud>
  );
};

export default Layout;
