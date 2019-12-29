import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 100%;
  align-items: end;
  background-color: #ffbb00; /* ヘッダーの背景色を指定する */
  /* justify-content: center;

  align-content: center; */
`;

const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const OutlinedButton = styled.button`
  border-radius: 3px;
  padding: 0.5em 0.9em;
  background: transparent;
  color: white;
  border: 1px solid white;
  margin-right: 20px;
  margin-left: 20px;
`;

const TextButton = styled.button`
  border: none;
  background: transparent;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContents>
        <OutlinedButton>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </OutlinedButton>
        <TextButton>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            SignUP
          </Link>
        </TextButton>
        <TextButton>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            LogOut
          </Link>
        </TextButton>
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;
