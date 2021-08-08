import React from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

import { SidebarContainer, SidebarCloseButton } from "./Styles";

const Sidebar = (props) => {
  return (
    <SidebarContainer {...props}>
      <SidebarCloseButton onClick={props.toggleSidebar}>
        <IoIosCloseCircleOutline />
      </SidebarCloseButton>
      <NavLinks sidebar />
      <ResumeButton sidebar />
      <SocialLinks sidebar />
    </SidebarContainer>
  );
};

export default Sidebar;
