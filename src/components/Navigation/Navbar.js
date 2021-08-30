import React from "react";

import { IoIosMenu } from "react-icons/io";

import CTA from "./CTA";
import NavLinks from "./NavLinks";
import LogoButton from "./LogoButton";
import { NavbarWrapper, NavbarContainer, MenuButton } from "./Styles";

const Navbar = (props) => {
  return (
    <NavbarWrapper {...props}>
      <NavbarContainer {...props}>
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
