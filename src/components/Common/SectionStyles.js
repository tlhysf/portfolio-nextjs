import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px")};
  margin: 0 auto;
  min-height: ${(props) => (props.fullHeight ? "100vh" : "auto")};
  max-width: ${(props) => (props.fullWidth ? "100%" : "1040px")};
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin: 0 8rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 4rem;
    flex-direction: column;
  }

  @media ${(props) => !props.flexCenter} {
    justify-content: center;
  }
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 0.2rem;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.theme.colors.gradients.primary};

  /* margin-top: 8rem; */
  margin-bottom: 2rem;

  /* @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 4rem;
  } */

  /* @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 0;
    height: 0.5rem;
  } */
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "40px")};
  line-height: ${(props) => (props.main ? "72px" : "40px")};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.gradients.text};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 32px;
  padding-bottom: ${(props) => (props.main ? "16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    padding-bottom: ${(props) => (props.main ? "12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    padding-bottom: ${(props) => (props.main ? "8px" : "0")};
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 20px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${(props) => props.theme.colors.text.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
