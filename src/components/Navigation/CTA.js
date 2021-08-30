import React from "react";

import { Button, ButtonGroup } from "components/Common/Buttons";

const CTA = (props) => {
  return (
    <ButtonGroup {...props}>
      <Button small>Resume</Button>
    </ButtonGroup>
  );
};

export default CTA;
