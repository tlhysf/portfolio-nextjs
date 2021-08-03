import React from "react";
import Link from "next/link";

import { NavLinksWrapper, NavLink } from "./Styles";

const NavLinks = (props) => {
  return (
    <NavLinksWrapper desktop={props.desktop}>
      {["Projects", "Skills", "About"].map((item) => (
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
