import React, { useContext } from "react";
import styled from "styled-components";

import SocialLinks from "components/Common/SocialLinks";
import { IconButton } from "components/Common/Buttons";
import { AiOutlineArrowUp } from "react-icons/ai";

import { Context } from "Context";

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
  transition: ease 0.6s;
  transform: translateY(${(props) => (props.scroll.y > 350 ? 0 : 100)}%);
`;

const FABs = () => {
  const { scroll } = useContext(Context);

  return (
    <Container scroll={scroll}>
      <div />
      <SocialLinks column hideOnSmall />
      <IconButton href="#Home">
        <AiOutlineArrowUp />
      </IconButton>
    </Container>
  );
};

export default FABs;
