import React from "react";

import { CTAButton, ButtonsWrapper } from "components/Common/Styles";

const ResumeButton = (props) => {
  return (
    <ButtonsWrapper {...props}>
      <CTAButton small>Resume</CTAButton>
    </ButtonsWrapper>
  );
};

export default ResumeButton;
