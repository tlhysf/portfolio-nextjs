import React from "react";

import { ButtonGroup, IconButton } from "components/Common/Buttons";

import { socials } from "data/about";

const SocialLinks = (props) => {
  return (
    <ButtonGroup {...props}>
      {socials.map(({ name, link, icon, external }, index) => (
        <IconButton
          key={name}
          color={["indigo", "blueviolet", "crimson"][index] || "gray"}
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
