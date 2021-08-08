import styled from "styled-components";

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 80%;
  }
`;
