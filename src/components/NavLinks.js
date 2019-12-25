import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.li`
  list-style: none;
  color: grey;
  .nav-item {
    color: #000;
    line-height: 40px;
  }
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
    title: "ブログ",
    link: "/beer-blog",
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
          <NavList key={index}>
            <Link className="nav-item" to={item.link}>
              {item.title}
            </Link>
          </NavList>
        );
      })}
    </ul>
  );
};

export default NavLinks;
