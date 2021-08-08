import React from "react";

import SocialLinks from "./SocialLinks";

import { FABContainer } from "./Styles";

const SocialLinksFAB = (props) => {
  return (
    <FABContainer {...props}>
      <SocialLinks column />
    </FABContainer>
  );
};

export default SocialLinksFAB;
