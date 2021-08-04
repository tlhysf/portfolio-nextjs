import styled from "styled-components";

const button = (props) => props.theme.colors.button;
const navLink = (props) => props.theme.colors.navLink;
const logo = (props) => props.theme.colors.logo;
const bg = (props) => props.theme.colors.bg;

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-items: space-between;
  padding: 2rem;
  transform: translateY(-100%);
  transition: 0.3s ease;
  transition-delay: 0s;
  @media ${(props) => props.openSidebar} {
    transform: translateY(0%);
    transition-delay: 0.3s;
  }
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
  color: ${(props) => logo(props).main};
  font-size: 3rem;
  transition: 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &:active {
    color: ${(props) => logo(props).active};
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
    justify-content: center;
    flex: 2;
  }
  @media ${(props) => props.desktop} {
    flex-direction: column;
    row-gap: 2rem;
    justify-content: center;
    flex: 2;
  }
`;

export const SocialLinksWrapper = styled.div`
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
  color: ${(props) => navLink(props).primary.main.color};
  transition: 0.2s ease;
  &:hover {
    color: ${(props) => navLink(props).primary.hover.color};
    opacity: 1;
    cursor: pointer;
    transform: scale(0.8);
  }
  &:active {
    color: ${(props) => navLink(props).primary.active.color};
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
  transition: 0.2s ease;
  color: ${(props) => button(props).primary.main.color};
  background-color: ${(props) => button(props).primary.main.bg};
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
          return (props) => button(props).primary.hover.color;
      }
    }};
    background-color: ${(props) => button(props).primary.hover.bg};
    border-style: none;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1);
  }
`;

export const SidebarOpenButton = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => button(props).primary.main.color};
    background-color: ${(props) => button(props).primary.main.bg};
    font-size: 1.8rem;
    transition: 0.2s ease;
    border-radius: 10%;
    border-style: solid;
    border-width: 0.2rem;
    &:hover {
      color: ${(props) => button(props).primary.hover.color};
      background-color: ${(props) => button(props).primary.hover.bg};
      border-style: none;
      transform: scale(1.2);
      cursor: pointer;
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(0%);
  background-color: ${(props) => bg(props).secondary};
  transition: 0.3s ease;
  transition-delay: 0.3s;
  @media ${(props) => props.openSidebar} {
    transform: translateX(100%);
    transition-delay: 0s;
  }
`;

export const SidebarCloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.2s ease;
  color: ${(props) => button(props).secondary.main.color};
  background-color: ${(props) => button(props).secondary.main.bg};
  font-size: 3rem;
  height: 6rem;
  flex: 1;
  &:hover {
    color: ${(props) => button(props).secondary.hover.color};
    background-color: ${(props) => button(props).secondary.hover.bg};
    cursor: pointer;
  }
  &:active {
    color: ${(props) => button(props).secondary.active.color};
    background-color: ${(props) => button(props).secondary.active.bg};
    font-size: 2.5rem;
  }
`;
