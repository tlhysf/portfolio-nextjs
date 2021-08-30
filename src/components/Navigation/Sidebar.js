import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import SocialLinks from "components/Common/SocialLinks";

import CTA from "./CTA";
import LogoButton from "./LogoButton";
import NavLinks from "./NavLinks";
import { SidebarContainer, NavbarTemplate, MenuButton } from "./Styles";

const Sidebar = (props) => {
  return (
    <SidebarContainer {...props}>
      <NavbarTemplate>
        <LogoButton />
        <MenuButton onClick={props.toggleSidebar}>
          <AiOutlineClose />
        </MenuButton>
      </NavbarTemplate>

      <NavLinks sidebar />
      <CTA />
      <SocialLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
