import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const LogoWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-content: center;
  justify-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-content: center;
  color: white;
  font-size: 3rem;
  line-height: 32px;
  transition: 0.4s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &:active {
    color: rgba(255, 255, 255, 0.5);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavLinksWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const NavLink = styled.a`
  display: flex;
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

export const SocialLinkWrapper = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
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
    transform: scale(1);
  }
`;
