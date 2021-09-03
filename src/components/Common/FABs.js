import React, { useContext } from "react";
import styled from "styled-components";

import SocialLinks from "components/Common/SocialLinks";

import { ScrollContext } from "Context/ScrollContext";

const Container = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndexes.navbar};
  height: 100%;
  left: 0;
  top: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ease 0.3s;
  transform: translateY(${(props) => (props.scroll.y > 350 ? 0 : 100)}%);
`;

const FABs = () => {
  const scroll = useContext(ScrollContext);

  return (
    <Container scroll={scroll}>
      <div />
      <SocialLinks column hideOnSmall />
      <div />
    </Container>
  );
};

export default FABs;
