import React from "react";

import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { ButtonGroup, IconButton } from "components/Common/Buttons";

const socials = [
  {
    name: "github",
    link: "http://www.github.com/tlhysf",
    icon: <AiFillGithub />,
    external: true,
  },
  {
    name: "linkedin",
    link: "http://www.linkedin.com/in/talha-yousuf",
    icon: <AiFillLinkedin />,
    external: true,
  },
  {
    name: "mail",
    link: "#contact",
    icon: <AiFillMail />,
    external: false,
  },
];

const getColor = (name) => {
  switch (name) {
    case "github":
      return "indigo";
    case "linkedin":
      return "blueviolet";
    case "mail":
      return "crimson";
    default:
      return "gray";
  }
};

const SocialLinks = (props) => {
  return (
    <ButtonGroup {...props}>
      {socials.map(({ name, link, icon, external }) => (
        <IconButton
          key={name}
          color={getColor(name)}
          target={external ? "_blank" : ""}
          href={link}
        >
          {icon}
        </IconButton>
      ))}
    </ButtonGroup>
  );
};
export default SocialLinks;
