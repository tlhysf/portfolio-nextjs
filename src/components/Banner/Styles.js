import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const GraphicContainer = styled.div`
  width: 400px;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 300px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 200px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const Greeting = styled.div`
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 3px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Heading = styled.h2`
  font-size: 60px;
  font-weight: 900;
  /* letter-spacing: 2px; */
  background: ${(props) => props.theme.colors.gradients.text};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding: 0;
  padding-bottom: 1.3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 40px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const SubHeading = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.accent.primary};
`;

export const Text = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;
