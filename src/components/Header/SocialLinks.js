import React from "react";

import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { ButtonsWrapper, SocialIcons } from "./Styles";

const SocialLinks = (props) => {
  return (
    <ButtonsWrapper {...props}>
      <SocialIcons
        key="github"
        name="github"
        target="_blank"
        href="http://www.github.com/tlhysf"
      >
        <AiFillGithub />
      </SocialIcons>
      <SocialIcons
        key={2}
        target="_blank"
        name="linkedin"
        key="linkedin"
        href="http://www.linkedin.com/in/talha-yousuf"
      >
        <AiFillLinkedin />
      </SocialIcons>
      <SocialIcons
        name="mail"
        key="mail"
        onClick={() => console.log("talhayousuf.work@gmail.com")}
      >
        <AiFillMail />
      </SocialIcons>
    </ButtonsWrapper>
  );
};
export default SocialLinks;
