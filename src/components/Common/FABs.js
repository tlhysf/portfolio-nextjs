import React from "react";
import styled from "styled-components";

import SocialLinks from "components/Common/SocialLinks";

const Container = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndexes.navbar};
  height: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FABs = (props) => {
  return (
    <Container {...props}>
      <SocialLinks column hideOnSmall />
    </Container>
  );
};

export default FABs;
