import React, { useContext } from "react";
import { ScrollContext } from "Context/ScrollContext";

import { IoIosMenu } from "react-icons/io";

import CTA from "./CTA";
import NavLinks from "./NavLinks";
import LogoButton from "./LogoButton";
import { NavbarWrapper, NavbarContainer, MenuButton } from "./Styles";

const Navbar = (props) => {
  const scroll = useContext(ScrollContext);

  return (
    <NavbarWrapper {...props} scroll={scroll}>
      <NavbarContainer {...props} scroll={scroll}>
        <LogoButton />
        <NavLinks />
        <CTA hideOnSmall />
        <MenuButton onClick={props.toggleSidebar}>
          <IoIosMenu />
        </MenuButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
