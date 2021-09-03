import React from "react";
import Link from "next/link";

import { NavLinksWrapper, NavLink } from "./Styles";

import sections from "config.js/sections";

const NavLinks = (props) => {
  return (
    <NavLinksWrapper {...props}>
      {sections.map((item) => (
        <li key={item}>
          <Link href={"#" + item}>
            <NavLink>{item}</NavLink>
          </Link>
        </li>
      ))}
    </NavLinksWrapper>
  );
};
export default NavLinks;
