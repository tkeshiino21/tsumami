import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.li`
  list-style: none;
  color: grey;
`;

const NavItems = [
  {
    title: "ホーム",
    link: "/",
  },
  {
    title: "注文",
    link: "/order",
  },
  {
    title: "カクテル",
    link: "/cocktail",
  },
  {
    title: "ツマミ",
    link: "/tsumami",
  },
  {
    title: "ビール",
    link: "/beer",
  },
  {
    title: "アルコールチェック",
    link: "/alchool-check",
  },
  {
    title: "Auth",
    link: "/auth",
  },
];

const NavLinks = () => {
  return (
    <ul>
      {NavItems.map((item, index) => {
        return (
          <NavList>
            <Link key={item.index} to={item.link}>
              {item.title}
            </Link>
          </NavList>
        );
      })}
    </ul>
  );
};

export default NavLinks;
