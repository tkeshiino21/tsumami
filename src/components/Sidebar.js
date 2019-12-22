import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const SidebarContainer = styled.div`
  width: 400px;
`;

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState();
  const sidebarToggler = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const sidebarCloseHandler = () => {
    setSidebarIsOpen(false);
  };

  return (
    <div>
      <button onClick={sidebarToggler}>MENU</button>

      {sidebarIsOpen === true ? (
        <SidebarContainer>
          <button onClick={sidebarCloseHandler}>Close</button>
          <NavLinks />
        </SidebarContainer>
      ) : null}
    </div>
  );
};

export default Sidebar;
