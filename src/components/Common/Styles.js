import styled from "styled-components";

const iconButton = (props) => props.theme.colors.iconButton;
const zIndex = (props) => props.theme.zIndexes;

export const boxShadow = "3px 3px 20px rgba(80, 78, 78, 0.5);";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  column-gap: 3rem;
  row-gap: 3rem;

  @media ${(props) => !props.hideOnSmall} {
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }
`;

export const CTAButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  cursor: pointer;
  border-radius: 5px;

  width: 18rem;
  height: 6rem;
  font-size: 2rem;
  font-weight: 400;

  @media ${(props) => !props.small} {
    width: 12rem;
    height: 4rem;
    font-size: 1.7rem;
  }

  background: ${(props) => props.theme.colors.accent.primary};
  color: white;

  &:hover {
    border: solid;
    background: none;
  }

  &:active {
    transform: scale(0.9);
    background: ${(props) => props.theme.colors.accent.primary + "50"};
    font-size: ${(props) => (props.small ? "2rem" : "2.5rem")};
  }
`;

export const SocialIcons = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  transition: 0.2s ease;
  color: ${(props) => iconButton(props).primary.main.color};
  background-color: ${(props) => iconButton(props).primary.main.bg};
  border-radius: 100%;
  border-style: solid;
  border-width: 0.2rem;
  &:hover {
    color: ${(props) => {
      switch (props.name) {
        case "github":
          return "indigo";
        case "linkedin":
          return "blueviolet";
        case "mail":
          return "crimson";
        default:
          return (props) => iconButton(props).primary.hover.color;
      }
    }};
    background-color: ${(props) => iconButton(props).primary.hover.bg};
    border-style: none;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1);
  }
`;

export const SocialLinksFABContainer = styled.div`
  position: fixed;
  z-index: ${(props) => zIndex(props).navbar};
  height: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TooltipPaper = styled.div`
  display: ${(props) => (props.hover ? "flex" : "none")};

  width: max-content;

  position: absolute;
  top: -6rem;
  left: -50%;

  transition: 0.6s ease;

  background-color: #ffffff;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  -webkit-box-shadow: ${boxShadow};
  color: black;

  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
`;
