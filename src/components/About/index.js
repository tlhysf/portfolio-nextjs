import React from "react";
import styled from "styled-components";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";

import { Title, Text, List } from "components/Common/Misc";

import { FiChevronsRight } from "react-icons/fi";

import { about, skills, skillsAlt } from "data/about";

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
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const Pill = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.bg.tertiary};
  background-color: ${({ theme }) => theme.colors.text.primary};
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
      <Text>Here is a summary of my skill-set:</Text>
      {/* <br />
      <Grid>
        {skills.map((item, index) => (
          <List key={index}>
            <Title>{item.title}</Title>
            <List smallGap>
              {item.list.split(",").map((item, index) => (
                <List smallGap row key={index}>
                  <FiChevronsRight />
                  <Text>{item}</Text>
                </List>
              ))}
            </List>
          </List>
        ))}
      </Grid> */}
      <br />
      <FlexBox>
        {skillsAlt.map((item, index) => (
          <Pill key={index}>{item}</Pill>
        ))}
      </FlexBox>
    </List>
    <br />
    <br />
  </Section>
);

export default About;
