import styled from "styled-components";

export const BannerContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 80%;
    left: 50%;
    margin: 0 0 0 -40%;
  }
`;

export const BannerBgContainer = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 50%;
  margin: -25% 0 0 0;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 50%;
    left: 50%;
    top: 50%;
    margin: -25% 0 0 -10%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    left: 50%;
    top: 50%;
    margin: -50% 0 0 -50%;
  }
`;
