import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #cccccc;
`;

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const sidebarToggler = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const sidebarCloseHandler = () => {
    setSidebarIsOpen(false);
  };

  return (
    <div>
      <SidebarContainer>
        <button onClick={sidebarToggler}>MENU</button>
        {sidebarIsOpen === true ? (
          <>
            <button onClick={sidebarCloseHandler}>Close</button>
            <NavLinks />
          </>
        ) : null}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
