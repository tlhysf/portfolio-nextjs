import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";

import {
  Container,
  LogoWrapper,
  Logo,
  Centered,
  NavLinksWrapper,
  NavLink,
  SocialLinkWrapper,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <LogoWrapper>
      <Link href="/">
        <Logo>
          <Centered>
            <BiCodeBlock />
          </Centered>
        </Logo>
      </Link>
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
    <SocialLinkWrapper>
      <SocialIcons
        name="github"
        target="_blank"
        href="http://www.github.com/tlhysf"
      >
        <AiFillGithub />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        name="linkedin"
        href="http://www.linkedin.com/in/talha-yousuf"
      >
        <AiFillLinkedin />
      </SocialIcons>
      <SocialIcons
        name="mail"
        onClick={() => console.log("talhayousuf.work@gmail.com")}
      >
        <AiFillMail />
      </SocialIcons>
    </SocialLinkWrapper>
  </Container>
);

export default Header;
