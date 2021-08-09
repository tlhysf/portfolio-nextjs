import React from "react";

import SocialLinks from "components/Common/SocialLinks";

import { SocialLinksFABContainer } from "components/Common/Styles";

const SocialLinksFAB = (props) => {
  return (
    <SocialLinksFABContainer {...props}>
      <SocialLinks column hideOnSmall />
    </SocialLinksFABContainer>
  );
};

export default SocialLinksFAB;
