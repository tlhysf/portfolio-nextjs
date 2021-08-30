import React from "react";
import Link from "next/link";
import { BiCodeBlock } from "react-icons/bi";
import { LogoWrapper, Logo } from "./Styles";

export default function LogoButton() {
  return (
    <LogoWrapper>
      <Link href="/">
        <Logo>
          <BiCodeBlock />
        </Logo>
      </Link>
    </LogoWrapper>
  );
}
