import React from "react";
import styled, { withTheme } from "styled-components";

import { ButtonGroup } from "components/Common/Buttons";
import Tooltip from "components/Common/Tooltip";

import { RiMoonClearLine, RiSunFoggyLine } from "react-icons/ri";

const IconButton = styled.a`
  font-size: 2rem;
  width: 2.9rem;
  height: 2.9rem;

  cursor: pointer;
  border-radius: 100%;

  transition: 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes pulse {
    0% {
      transform: scale(1.4);
    }
    5% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.8);
    }
    15% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.4);
    }
    25% {
      transform: scale(1);
    }
    30% {
      transform: scale(0.8);
    }
    35% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  -webkit-animation: pulse 2s linear infinite alternate;
  animation: pulse 2s linear infinite alternate;

  -webkit-animation-delay: 2s;
  animation-delay: 2s;

  &:hover {
    transform: scale(1.2);
    background-color: ${(props) => props.theme.colors.accent.secondary};
    color: #fff;
    -webkit-animation: none;
    animation: none;
  }

  &:active {
    transform: scale(1);
  }
`;

const ThemeButton = (props) => {
  const { id, changeTheme } = props.theme;

  const renderIcon = id === "dark" ? <RiMoonClearLine /> : <RiSunFoggyLine />;
  const tooltip = id === "dark" ? "Light" : "Dark";

  return (
    <ButtonGroup {...props}>
      <Tooltip content={"Switch to " + tooltip + " Mode"} bottom>
        <IconButton onClick={(e) => changeTheme()}>{renderIcon}</IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};

export default withTheme(ThemeButton);
