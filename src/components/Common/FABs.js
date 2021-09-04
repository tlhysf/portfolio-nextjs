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
  transform: translateY(${(props) => (props.hide ? 0 : 100)}%);
`;

const FABs = () => {
  const { scroll } = useContext(Context);

  // scroll position as entering a section
  // works only on desktop
  // atm needed only for desktop as well
  const section = {
    second: 350,
    last: 4200,
  };

  return (
    <Container hide={scroll.y > section.second}>
      <div />
      <SocialLinks column hideOnSmall hide={scroll.y > section.last} />
      <IconButton href="#Home">
        <AiOutlineArrowUp />
      </IconButton>
    </Container>
  );
};

export default FABs;
