import styled from "styled-components";

const button = (props) => props.theme.colors.button;
const navLink = (props) => props.theme.colors.navLink;
const logo = (props) => props.theme.colors.logo;
const bg = (props) => props.theme.colors.bg;
const zIndex = (props) => props.theme.zIndexes;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => zIndex(props).navbar};
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: center;
  transition: 0.3s ease;

  transform: translateY(-100%);
  transition-delay: 0s;
  @media ${(props) => props.openSidebar} {
    transform: translateY(0%);
    transition-delay: 0.3s;
  }
`;

const boxShadow =
  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px," +
  "rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px," +
  "rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;";

export const Paper = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: space-between;
  padding: 2rem 6rem;
  transition: 0.6s ease;

  @media ${(props) => props.scroll.y <= 0} {
    background-color: ${(props) => bg(props).secondary + "50"};

    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);

    box-shadow: ${boxShadow};
    -moz-box-shadow: ${boxShadow};
    -webkit-box-shadow: ${boxShadow};

    transform: scale(0.9);
    border-radius: 1rem;
    padding: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex: 1;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-content: center;
  justify-items: center;
  color: ${(props) => logo(props).main};
  font-size: 3.5rem;
  transition: 0.2s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &:active {
    color: ${(props) => logo(props).active};
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // in navbar
  flex-direction: row;
  column-gap: 6rem;
  flex: 1;

  // in sidebar
  @media ${(props) => !props.sidebar} {
    flex-direction: column;
    row-gap: 3rem;
    flex: none;
  }

  // in navbar, on small screens
  @media ${(props) => props.sidebar} {
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  column-gap: 3rem;
  row-gap: 3rem;

  // not in sidebar, on small screens
  @media ${(props) => props.sidebar} {
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
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
  z-index: ${(props) => zIndex(props).drawer};
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  row-gap: 10rem;
  background-color: ${(props) => bg(props).secondary};
  transition: 0.3s ease;

  transform: translateX(0%);
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

export const FABContainer = styled.div`
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
