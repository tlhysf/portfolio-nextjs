import styled from "styled-components";

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
