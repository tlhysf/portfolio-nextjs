import styled from "styled-components";
import { List } from "components/Common/Misc";

export const BulletList = styled(List)`
  height: fit-content;
  transition: max-height ease-in-out 0.3s;
  transition-delay: ${({ delay }) => (delay ? delay : 0)}s;

  max-height: 100vh;
  @media ${(props) => props.when} {
    max-height: 0;
    overflow: hidden;
  }
`;

export const BulletContainer = styled.div`
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1.5rem;
  transition: all ease-in-out 0.3s;
  transition-delay: ${({ delay }) => (delay ? delay : 0)}s;

  opacity: 1;
  @media ${(props) => props.when} {
    opacity: 0;
  }
`;

export const BulletIcon = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent.primary};
`;

export const ExpandButton = styled.div`
  font-size: 16px;
  width: ${(props) => props.widthFactor * 10.5}px;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.3s;

  color: ${(props) => props.theme.colors.text.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.accent.hover};
    color: ${(props) => props.theme.colors.accent.primary};
    cursor: pointer;
  }

  @media ${(props) => !props.selected} {
    background-color: ${(props) => props.theme.colors.accent.hover};
    color: ${(props) => props.theme.colors.accent.primary};
  }
`;

export const Header = styled.div`
  padding-top: 8px;
`;

const circleSize = 15;
const lineWidth = 2;
const lineMargin = circleSize / 2 - lineWidth / 2;

export const Dot = styled.div`
  font-size: ${circleSize}px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ease-in-out 0.7s;
  color: ${(props) => props.theme.colors.text.secondary};
  @media ${(props) => !props.selected} {
    color: ${(props) => props.theme.colors.accent.primary};
  }
`;

export const Line = styled.div`
  height: calc(100% - 40px);
  width: ${lineWidth}px;
  margin: auto ${lineMargin}px;

  transition: all ease-in-out 0.7s;
  background-color: ${(props) => props.theme.colors.text.secondary};
  @media ${(props) => !props.selected} {
    background-color: ${(props) => props.theme.colors.accent.primary};
  }
`;
