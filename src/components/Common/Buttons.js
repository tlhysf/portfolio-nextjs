import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  column-gap: 3rem;
  row-gap: 3rem;
  padding: ${(props) => (props.padding ? "0 3rem" : 0)};

  @media ${(props) => !props.hideOnSmall} {
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }

  @media ${({ hide }) => !hide} {
    display: none;
  }
`;

export const Button = styled.a`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  border-width: 1px;
  transition: 0.3s ease;
  width: ${(props) => (props.autoWidth ? "fit-content" : "12rem")};
  padding: 0 1.5rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: 300;
  background: ${(props) => props.theme.colors.accent.primary};
  color: white;

  @media ${(props) => !props.small} {
    width: 9rem;
    height: 3rem;
  }

  &:hover {
    border-style: solid;
    background: none;
    color: ${(props) => props.theme.colors.text.primary};
    font-weight: 500;
  }

  &:active {
    background: ${(props) => props.theme.colors.accent.primary + "50"};
    border-style: solid;
  }
`;

export const IconButton = styled.a`
  width: 3.3rem;
  height: 3.3rem;
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
    background-color: ${({ color, theme }) =>
      color ? color : theme.colors.bg.secondary};
    color: #fff;
    border-style: none;
    transform: scale(1.2);
    cursor: pointer;
  }
  &:active {
    border-style: solid;
  }
`;
