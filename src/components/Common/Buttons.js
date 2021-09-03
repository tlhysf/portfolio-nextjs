import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  column-gap: 3rem;
  row-gap: 3rem;

  @media ${(props) => !props.hideOnSmall} {
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }
`;

export const Button = styled.a`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;

  transition: 0.3s ease;

  width: 18rem;
  height: 6rem;
  font-size: 2rem;
  font-weight: 400;

  @media ${(props) => !props.small} {
    width: 12rem;
    height: 4rem;
    font-size: 1.7rem;
  }

  background: ${(props) => props.theme.colors.accent.primary};
  color: white;

  &:hover {
    border: solid;
    background: none;
  }

  &:active {
    transform: scale(0.8);
    background: ${(props) => props.theme.colors.accent.primary + "50"};
    font-size: ${(props) => (props.small ? "2rem" : "2.5rem")};
  }
`;

export const IconButton = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  transition: 0.2s ease;
  color: ${(props) => props.theme.colors.text.primary};
  background-color: none;
  border-radius: 100%;
  border-style: solid;
  border-width: 0.2rem;
  &:hover {
    background-color: ${(props) => props.color};
    border-style: none;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    transform: scale(1);
  }
`;
