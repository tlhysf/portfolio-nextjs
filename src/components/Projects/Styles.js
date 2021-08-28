import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Drawer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  line-height: 20px;

  background-color: ${(props) => props.theme.colors.bg.tertiary + "99"};
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);

  transition: 0.3s ease-in-out;
  top: -100%;

  @media ${(props) => !props.open} {
    top: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  opacity: 0.7;
  transition: 0.3s ease-in-out;
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bg.secondary};

  transition: 0.3s ease-in-out;

  width: 100%;
  height: 100%;

  &:hover {
    width: 101%;
    height: 101%;
  }

  &:hover ${Image} {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  padding: ${({ smallPadding, largePadding }) =>
    smallPadding ? "15px 15px" : largePadding ? "15px 30px" : 0};

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${(props) => !props.row} {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Divider = styled.hr`
  width: ${({ length }) => length * 14}px;
  height: 0.2rem;
  border: 0;
  background: ${(props) => props.theme.colors.gradients.primary};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 5px;
`;

export const Tag = styled.div`
  max-width: fit-content;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: ${(props) => props.theme.colors.accent.hover};

  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.text.secondary};
  color: ${(props) => props.theme.colors.bg.tertiary};

  font-size: 14px;
  padding: 5px 10px;
  border-radius: 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.text.primary};
    cursor: pointer;
  }
`;
