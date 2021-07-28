import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  LogoWrapper,
  Logo,
  LogoImage,
  NavLinksWrapper,
  NavLink,
  Div3,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <LogoWrapper>
      <Logo>
        <LogoImage src="/images/logo.png" alt="logo" />
      </Logo>
    </LogoWrapper>
    <NavLinksWrapper>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </NavLinksWrapper>
    
  </Container>
);

export default Header;
