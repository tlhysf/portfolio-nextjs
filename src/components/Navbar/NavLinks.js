import React from "react";
import Link from "next/link";

import { NavLinksWrapper, NavLink } from "components/Navbar/Styles";

const NavLinks = (props) => {
  return (
    <NavLinksWrapper {...props}>
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
