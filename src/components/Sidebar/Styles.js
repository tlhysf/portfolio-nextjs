import styled from "styled-components";

const iconButton = (props) => props.theme.colors.iconButton;
const zIndex = (props) => props.theme.zIndexes;
const bg = (props) => props.theme.colors.bg;

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

  background-color: ${(props) => bg(props).secondary + "90"};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);

  transition: 0.3s ease;

  transform: translateX(0%);
  transition-delay: 0.1s;
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
  color: ${(props) => iconButton(props).secondary.main.color};
  background-color: ${(props) => iconButton(props).secondary.main.bg};
  font-size: 3rem;
  height: 6rem;
  &:hover {
    color: ${(props) => iconButton(props).secondary.hover.color};
    background-color: ${(props) => iconButton(props).secondary.hover.bg};
    cursor: pointer;
  }
  &:active {
    color: ${(props) => iconButton(props).secondary.active.color};
    background-color: ${(props) => iconButton(props).secondary.active.bg};
    font-size: 2.5rem;
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
    color: ${(props) => iconButton(props).primary.main.color};
    background-color: ${(props) => iconButton(props).primary.main.bg};
    font-size: 1.8rem;
    transition: 0.2s ease;
    border-radius: 10%;
    border-style: solid;
    border-width: 0.2rem;
    &:hover {
      color: ${(props) => iconButton(props).primary.hover.color};
      background-color: ${(props) => iconButton(props).primary.hover.bg};
      border-style: none;
      transform: scale(1.2);
      cursor: pointer;
    }
    &:active {
      transform: scale(1);
    }
  }
`;
