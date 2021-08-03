import React from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";

import { SidebarContainer, SidebarCloseButton } from "./Styles";

const Sidebar = (props) => {
  return (
    <SidebarContainer {...props}>
      <SidebarCloseButton onClick={props.toggleSidebar}>
        <IoIosCloseCircleOutline />
      </SidebarCloseButton>
      <NavLinks />
      <SocialLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
