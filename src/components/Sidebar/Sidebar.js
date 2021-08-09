import React from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

import SocialLinks from "components/Common/SocialLinks";
import NavLinks from "components/Navbar/NavLinks";
import ResumeButton from "components/Common/ResumeButton";

import {
  SidebarContainer,
  SidebarCloseButton,
} from "components/Sidebar/Styles";

const Sidebar = (props) => {
  return (
    <SidebarContainer {...props}>
      <SidebarCloseButton onClick={props.toggleSidebar}>
        <IoIosCloseCircleOutline />
      </SidebarCloseButton>
      <NavLinks sidebar />
      <ResumeButton />
      <SocialLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
