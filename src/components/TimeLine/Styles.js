import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 ${(props) => (props.xMargin ? "6rem" : 0)};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  row-gap: ${(props) => (props.noGap ? 0 : "2rem")};
  column-gap: ${(props) => (props.noGap ? 0 : "2rem")};

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: ${(props) =>
      !props.responsive && props.row ? "row" : "column"};
  }
`;

export const Title = styled.div`
  font-size: 20px;
  height: 40px;
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  font-weight: 200;
  letter-spacing: 2px;
  margin: 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: auto 20px;
  }
`;

export const ExternalLink = styled.a`
  font-size: 20px;
  font-style: italic;
  transition: all ease-in-out 0.5s;
  color: ${(props) => props.theme.colors.accent.primary};
  border-bottom: solid 1px;
  border-color: #00000000;
  width: fit-content;
  height: fit-content;
  margin: auto 5px;
  &:hover {
    border-color: ${(props) => props.theme.colors.accent.primary};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: auto 20px;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
`;

export const BulletList = styled(List)`
  height: fit-content;
  transition: max-height ease-in-out 0.2s;
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
  transition: all ease-in-out 0.2s;
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
  width: 230px;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.5s;

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

const circleSize = 16;
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
