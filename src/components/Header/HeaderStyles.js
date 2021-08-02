import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-items: space-between;
  padding: 2rem;
`;

export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-items: center;
`;

export const Logo = styled.a`
  display: flex;
  align-content: center;
  justify-items: center;
  color: white;
  font-size: 3rem;
  transition: 0.4s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &:active {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const NavLinksWrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.desktop ? "none" : "flex")};
    flex-direction: column;
    row-gap: 2rem;
    flex: 1;
  }
`;

export const SocialLinkWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => (props.desktop ? "none" : "flex")};
  }
`;

export const NavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    transform: scale(0.8);
  }
  &:active {
    color: rgba(255, 255, 255, 0.5);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const SocialIcons = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  transition: 0.3s ease;
  color: white;
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
          return "black";
      }
    }};
    background-color: white;
    border-style: none;
    transform: scale(1.2);

    cursor: pointer;
  }
  &:active {
    transform: scale(0.8);
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.8rem;
    transition: 0.3s ease;
    border-radius: 10%;
    border-style: solid;
    border-width: 0.2rem;
    &:hover {
      color: black;
      background-color: white;
      border-style: none;
      transform: scale(1.2);
      cursor: pointer;
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;
