import styled from "styled-components";

const iconButton = (props) => props.theme.colors.iconButton;
const zIndex = (props) => props.theme.zIndexes;

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

const HeaderText = styled.a`
  font-size: 20px;
  height: 40px;
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  margin-right: 5px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    height: 42px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    height: 38px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    height: 34px;
  }
`;

export const Title = styled(HeaderText)`
  font-weight: 300;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ExternalLink = styled(HeaderText)`
  font-style: italic;
  color: ${(props) => props.theme.colors.accent.primary};
  width: fit-content;

  @media ${({ disableHover }) => disableHover} {
    &:hover {
      @media ${({ altHover }) => !altHover} {
        color: ${(props) => props.theme.colors.text.primary};
      }
      text-decoration: underline;
    }
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) =>
    props.theme.colors.text[props.bright ? "primary" : "secondary"]};
  display: flex;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  row-gap: ${(props) => (props.noGap ? 0 : props.smallGap ? "1rem" : "2rem")};
  column-gap: ${(props) =>
    props.noGap ? 0 : props.smallGap ? "1rem" : "2rem"};

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: ${(props) =>
      !props.responsive && props.row ? "row" : "column"};
  }
`;
