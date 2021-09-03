import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndexes.navbar};
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: center;

  transition: 0.3s ease;

  transform: translateY(-100%);
  transition-delay: 0s;

  @media ${(props) => props.openSidebar} {
    transform: ${(props) =>
      props.scroll.yUpward ? "translateY(0%)" : "translateY(-100%)"};
    transition-delay: 0.5s;
  }
`;

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndexes.drawer};
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  row-gap: 10rem;

  background-color: ${(props) => props.theme.colors.bg.secondary + "90"};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);

  transition: 0.3s ease;

  transform: translateX(0%);
  transition-delay: 0.5s;
  @media ${(props) => props.openSidebar} {
    transform: translateX(100%);
    transition-delay: 0s;
  }
`;

const boxShadow =
  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px," +
  "rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px," +
  "rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;";

export const NavbarTemplate = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: space-between;
  padding: 2rem 6rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const NavbarContainer = styled(NavbarTemplate)`
  margin: 0 auto;
  transition: 0.3s ease;

  display: flex;
  align-items: center;

  @media ${(props) => props.scroll.y <= 0} {
    /* margin: 0 auto; */
    /* margin-top: 1rem; */
    /* width: 90%;
    border-radius: 0.5rem; */

    background-color: ${(props) => props.theme.colors.bg.secondary + "90"};
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    box-shadow: ${boxShadow};
    -moz-box-shadow: ${boxShadow};
    -webkit-box-shadow: ${boxShadow};
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
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 3.5rem;
  transition: 0.3s ease;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
  }
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
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
  font-size: 1.5rem;
  line-height: 28px;
  color: ${(props) => props.theme.colors.text.primary};
  transition: 0.3s ease;

  border-bottom: solid 2px;
  border-color: #00000000;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent.primary};
    cursor: pointer;
  }

  &:active {
    border-color: ${(props) => props.theme.colors.text.primary};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const MenuButton = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text.primary};
    font-size: 18px;
    transition: 0.3s ease;
    border-radius: 10%;
    border-style: solid;
    border-width: 0.2rem;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.text.primary};
      color: ${(props) => props.theme.colors.bg.primary};
      font-size: 22px;
    }
    &:active {
      background-color: ${(props) => props.theme.colors.text.secondary};
    }
  }
`;
