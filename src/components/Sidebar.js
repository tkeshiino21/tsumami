import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #cccccc;
  z-index: 999;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Sidebar = props => {
  return (
    <SidebarContainer>
      <CloseButton onClick={props.handleClick}>×</CloseButton>
      <NavLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
