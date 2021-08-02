import Link from "next/link";
import React from "react";

import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";

import {
  Container,
  LogoWrapper,
  Logo,
  NavLinksWrapper,
  NavLink,
  SocialLinkWrapper,
  SocialIcons,
  MobileMenuButton,
} from "./HeaderStyles";

const Header = (props) => {
  const renderNavLinks = ["Projects", "Skills", "About"].map((item) => (
    <li key={item}>
      <Link href={"#" + item}>
        <NavLink>{item}</NavLink>
      </Link>
    </li>
  ));

  const renderSocialLinks = [
    <SocialIcons
      key="github"
      name="github"
      target="_blank"
      href="http://www.github.com/tlhysf"
    >
      <AiFillGithub />
    </SocialIcons>,
    <SocialIcons
      key={2}
      target="_blank"
      name="linkedin"
      key="linkedin"
      href="http://www.linkedin.com/in/talha-yousuf"
    >
      <AiFillLinkedin />
    </SocialIcons>,
    <SocialIcons
      name="mail"
      key="mail"
      onClick={() => console.log("talhayousuf.work@gmail.com")}
    >
      <AiFillMail />
    </SocialIcons>,
  ].map((x) => x);

  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Logo>
            <BiCodeBlock />
          </Logo>
        </Link>
      </LogoWrapper>
      <NavLinksWrapper desktop>{renderNavLinks}</NavLinksWrapper>
      <SocialLinkWrapper desktop>{renderSocialLinks}</SocialLinkWrapper>
      <MobileMenuButton onClick={props.toggleMobileMenu}>
        <IoIosMenu />
      </MobileMenuButton>
    </Container>
  );
};

export default Header;
