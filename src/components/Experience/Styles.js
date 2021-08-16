import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: ${(props) => (props.xMargin ? "6rem" : 0)};
    margin-right: ${(props) => (props.xMargin ? "6rem" : 0)};
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  row-gap: ${(props) => (props.noGap ? 0 : "2rem")};
  column-gap: ${(props) => (props.noGap ? 0 : "2rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: ${(props) =>
      !props.reponsive && props.row ? "row" : "column"};
  }
`;

const circleSize = 15;
const titleFontSize = circleSize * 1.2;
const titleFontHeight = circleSize * 1.5;
const lineWidth = circleSize / 6;
const lineMargin = circleSize / 2 - lineWidth / 2;
const color = "#ffffff";

export const CircleContainer = styled.div`
  font-size: ${circleSize}px;
  height: ${titleFontHeight}px;
  color: ${color};
  display: flex;
  align-items: center;
`;

export const LineContainer = styled.div`
  height: 100%;
  border-left: solid ${lineMargin}px #00000000;
`;

export const Line = styled.div`
  height: 100%;
  background-color: ${color};
  width: ${lineWidth}px;
  border-radius: ${lineWidth}px;
`;

export const Period = styled.div`
  font-size: ${circleSize}px;
  height: ${titleFontHeight}px;
  color: ${color};
  display: flex;
  align-items: center;
  opacity: 0.8;
`;

export const Title = styled.div`
  font-size: ${titleFontSize}px;
  height: ${titleFontHeight}px;
  color: ${color};
  display: flex;
  align-items: center;
  font-weight: ${circleSize * 100};
  letter-spacing: ${lineWidth}px;
`;

export const Place = styled.a`
  font-size: ${titleFontSize}px;
  color: ${(props) => props.theme.colors.accent.primary};
  display: flex;
  align-items: center;
  font-style: italic;

  &:hover {
    border-bottom: solid 0.8px;
  }
`;

export const Description = styled.div`
  color: ${color};
  opacity: 0.8;
  display: flex;
  align-items: center;
`;

export const Bullet = styled.div``;
