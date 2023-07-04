import React from "react";
import styled from "styled-components";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";

import {
  // Title,
  Text,
  List,
} from "components/Common/Misc";

// import { FiChevronsRight } from "react-icons/fi";

import {
  about,
  // skills,
  skillsAlt,
} from "data/about";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FlexBox = styled.div`
  /* width: 80%; */
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.2rem;
  row-gap: 1.2rem;
`;

export const Pill = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme, index }) =>
    theme.colors.accent.primary +
    String(Math.abs(100 - index * 5)).slice(0, 2)};
  border-radius: 5px;
`;

const About = () => (
  <Section fullHeight id="About">
    <SectionDivider />
    <SectionTitle>About</SectionTitle>
    <List>
      {about.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <br />
      <FlexBox>
        {skillsAlt.map((item, index) => (
          <Pill index={index + 1} key={index}>
            {item}
          </Pill>
        ))}
      </FlexBox>
    </List>
    <br />
    <br />
  </Section>
);

export default About;
