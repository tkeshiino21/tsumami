import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

const Title = styled.h4`
  margin-left: 20px;
  margin-right: auto;
  .link {
    text-decoration: none;
  }
`;

const Header = props => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <HeaderContainer>
      <HeaderContents>
        <Title>
          <Link className="link" to="/">
            TSUMAMI
          </Link>
        </Title>
        <TextButton onClick={props.handleClick}>Menu</TextButton>
        {!auth.uid ? (
          <OutlinedButton>
            <Link to="/login" style={{ textDecoration: "none" }}>
              LogIn
            </Link>
          </OutlinedButton>
        ) : null}
        {!auth.uid ? (
          <TextButton>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              SignUP
            </Link>
          </TextButton>
        ) : null}
        {auth.uid ? (
          <TextButton>
            <Link to="/logout" style={{ textDecoration: "none" }}>
              LogOut
            </Link>
          </TextButton>
        ) : null}
      </HeaderContents>
    </HeaderContainer>
  );
};

export default Header;
