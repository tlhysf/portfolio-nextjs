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

// const circleSize = 15;
// const titleFontHeight = circleSize * 1.5;
// const lineWidth = circleSize / 6;
// const lineMargin = circleSize / 2 - lineWidth / 2;
// const color = "#ffffff";

// export const CircleContainer = styled.div`
//   font-size: ${circleSize}px;
//   height: ${titleFontHeight}px;
//   color: ${color};
//   display: flex;
//   align-items: center;
//   opacity: 0.5;
// `;

// export const LineContainer = styled.div`
//   height: 100%;
//   border-left: solid ${lineMargin}px #00000000;
//   opacity: 0.5;
// `;

// export const Line = styled.div`
//   height: 100%;
//   background-color: ${color};
//   width: ${lineWidth}px;
//   border-radius: ${lineWidth}px;
// `;

export const Title = styled.div`
  font-size: 20px;
  height: 40px;
  color: ${(props) => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  font-weight: 200;
  letter-spacing: 2px;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin: auto;
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
    margin: auto;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
`;

export const BulletContainer = styled.div`
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1.5rem;
`;

export const BulletIcon = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.accent.primary};
`;

export const ExpandButton = styled.div`
  font-size: 16px;
  min-width: 20rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Reveal = styled.div`
  visibility: visible;
  opacity: 1;
  transition: all 0s linear 0.33s, opacity 0.33s linear;
  transition-delay: ${(props) => (props.delay ? delay : 0)};

  @media ${(props) => props.when} {
    visibility: hidden;
    opacity: 0;
  }
`;
