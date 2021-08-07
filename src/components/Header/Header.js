import Link from "next/link";
import React from "react";

import { IoIosMenu } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";

import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";

import {
  Container,
  Paper,
  LogoWrapper,
  Logo,
  SidebarOpenButton,
} from "./Styles";

const Header = (props) => {
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
        <NavLinks desktop />
        <SocialLinks desktop />
        <SidebarOpenButton onClick={props.toggleSidebar}>
          <IoIosMenu />
        </SidebarOpenButton>
      </Paper>
    </Container>
  );
};

export default Header;
