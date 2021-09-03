import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import { LogoWrapper, Logo } from "./Styles";

export default function LogoButton() {
  return (
    <LogoWrapper>
      <Logo href="/">
        <BiCodeBlock />
      </Logo>
    </LogoWrapper>
  );
}
