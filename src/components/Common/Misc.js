import styled from "styled-components";

const HeaderText = styled.a`
  font-size: 20px;
  height: 40px;
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: flex-start;
  margin-right: 5px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    height: 42px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    height: 38px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    height: 34px;
  }
`;

export const Title = styled(HeaderText)`
  font-weight: 300;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ExternalLink = styled(HeaderText)`
  font-style: italic;
  color: ${(props) => props.theme.colors.accent.primary};
  width: fit-content;

  @media ${({ disableHover }) => disableHover} {
    &:hover {
      @media ${({ altHover }) => !altHover} {
        color: ${(props) => props.theme.colors.text.primary};
      }
      text-decoration: underline;
    }
  }
`;

export const Text = styled.div`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;

  color: ${(props) =>
    props.theme.colors.text[props.bright ? "primary" : "secondary"]};

  text-align: left;
  text-justify: none;
  word-wrap: break-word;
`;

export const List = styled.div`
  display: flex;
  margin: ${(props) => (props.center ? "0 auto" : 0)};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  row-gap: ${(props) => (props.noGap ? 0 : props.smallGap ? "1rem" : "2rem")};
  column-gap: ${(props) =>
    props.noGap ? 0 : props.smallGap ? "1rem" : "2rem"};

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: ${(props) =>
      !props.responsive && props.row ? "row" : "column"};
  }
`;
