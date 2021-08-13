import React, { useState } from "react";
import { TooltipPaper } from "components/Common/Styles";

const Tooltip = ({ children, content }) => {
  const [hover, sethover] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={(e) => sethover(true)}
      onMouseLeave={(e) => sethover(false)}
    >
      <TooltipPaper hover={hover}>{content}</TooltipPaper>
      {children}
    </div>
  );
};

export default Tooltip;
