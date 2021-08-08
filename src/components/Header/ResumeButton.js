import React from "react";

import { CTAButton } from "../../styles/GlobalComponents";
import { ButtonsWrapper } from "./Styles";

const ResumeButton = (props) => {
  return (
    <ButtonsWrapper {...props}>
      <CTAButton small>Resume</CTAButton>
    </ButtonsWrapper>
  );
};

export default ResumeButton;
