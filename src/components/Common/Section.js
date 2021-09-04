import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
  min-height: ${(props) => (props.fullHeight ? "100vh" : "auto")};
  max-width: ${(props) => (props.fullWidth ? "100%" : "1040px")};
  box-sizing: content-box;
  position: relative;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 4rem;
  }
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #fff;
  background: ${(props) => props.theme.colors.gradients.primary};
  margin-bottom: 2rem;

  margin-top: 8rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.gradients.text};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;

  font-size: 30px;
  margin-bottom: 4rem;
`;
