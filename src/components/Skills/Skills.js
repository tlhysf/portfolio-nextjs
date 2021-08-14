import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "components/Common/SectionStyles";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "components/Skills/Styles";

const Skills = () => (
  <Section fullHeight nopadding id="Skills">
    <SectionDivider colorAlt divider xMargin />
    <SectionTitle xMargin>Skills</SectionTitle>
    <SectionText xMargin>
      I've worked with a range a technologies in the web development. From
      Back-end To Design.
    </SectionText>
    <List xMargin>
      <ListItem>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>ReactJS</ListParagraph>
          <ListParagraph>Redux</ListParagraph>
          <ListParagraph>Styled Components</ListParagraph>
          <ListParagraph>NextJS</ListParagraph>
          <ListParagraph>MaterialUI</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>NodeJS</ListParagraph>
          <ListParagraph>MongoDB</ListParagraph>
          <ListParagraph>Firebase</ListParagraph>
          <ListParagraph>JWT</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>Figma</ListParagraph>
          <ListParagraph>Git</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
