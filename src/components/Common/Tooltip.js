import React, { useState } from "react";

import styled from "styled-components";

export const TooltipPaper = styled.div`
  display: ${(props) => (props.hover ? "flex" : "none")};

  width: max-content;

  position: absolute;
  top: -40px;

  background-color: #00000090;
  color: ${(props) => props.theme.colors.text.primary};

  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
`;

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
