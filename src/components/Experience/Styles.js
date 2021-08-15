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
  row-gap: ${(props) => (props.noGap ? 0 : "3rem")};
  column-gap: ${(props) => (props.noGap ? 0 : "3rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: ${(props) =>
      !props.reponsive && props.row ? "row" : "column"};
  }
`;

const circleSize = 5;
const titleFontSize = 20;
const lineWidth = circleSize / 3;
const lineMargin = circleSize / 2 - lineWidth / 2;
const color = "#ffffff";

export const CircleContainer = styled.div`
  font-size: ${circleSize}px;
  height: ${titleFontSize}px;
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

export const Period = styled.div``;

export const Title = styled.div``;

export const Place = styled.div``;

export const Bullet = styled.div``;
