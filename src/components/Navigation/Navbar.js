import React, { useContext } from "react";
import { Context } from "context";

import { IoIosMenu } from "react-icons/io";

import CTA from "./CTA";
import ThemeButton from "./ThemeButton";
import NavLinks from "./NavLinks";
import LogoButton from "./LogoButton";
import { NavbarWrapper, NavbarContainer, MenuButton } from "./Styles";

const Navbar = (props) => {
  const { scroll } = useContext(Context);

  return (
    <NavbarWrapper {...props} scroll={scroll}>
      <NavbarContainer {...props} scroll={scroll}>
        <LogoButton />
        <NavLinks />
        {/* <ThemeButton padding /> */}
        <CTA hideOnSmall />
        <MenuButton onClick={props.toggleSidebar}>
          <IoIosMenu />
        </MenuButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
