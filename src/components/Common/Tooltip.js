import React, { useState } from "react";

import styled from "styled-components";

export const TooltipPaper = styled.div`
  display: ${(props) => (props.hover ? "flex" : "none")};

  width: max-content;

  position: absolute;

  top: ${(props) => (props.bottom ? "calc(100% + 20px)" : "-40px")};
  left: 0;

  background-color: #00000099;
  color: #ffffff99;

  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
`;

const Tooltip = ({ children, content, bottom }) => {
  const [hover, sethover] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={(e) => sethover(true)}
      onMouseLeave={(e) => sethover(false)}
    >
      <TooltipPaper hover={hover} bottom={bottom}>
        {content}
      </TooltipPaper>
      {children}
    </div>
  );
};

export default Tooltip;
