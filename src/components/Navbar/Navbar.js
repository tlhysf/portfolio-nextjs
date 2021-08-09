import Link from "next/link";
import React from "react";

import { IoIosMenu } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";

import NavLinks from "components/Navbar/NavLinks";
import ResumeButton from "components/Common/ResumeButton";

import { Container, Paper, LogoWrapper, Logo } from "components/Navbar/Styles";
import { SidebarOpenButton } from "components/Sidebar/Styles";

const Navbar = (props) => {
  return (
    <Container {...props}>
      <Paper {...props}>
        <LogoWrapper>
          <Link href="/">
            <Logo>
              <BiCodeBlock />
            </Logo>
          </Link>
        </LogoWrapper>
        <NavLinks />
        <ResumeButton hideOnSmall />
        <SidebarOpenButton onClick={props.toggleSidebar}>
          <IoIosMenu />
        </SidebarOpenButton>
      </Paper>
    </Container>
  );
};

export default Navbar;
