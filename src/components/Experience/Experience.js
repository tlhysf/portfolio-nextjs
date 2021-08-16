import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "components/Common/SectionStyles";

import {
  ListContainer,
  List,
  CircleContainer,
  Line,
  LineContainer,
  Period,
  Title,
  Place,
  Bullet,
  Description,
} from "components/Experience/Styles";

import { VscCircleFilled as Circle, VscLinkExternal } from "react-icons/vsc";

import { experiences } from "data/experiences";

const Experience = ({ period, title, place, bullets, link, description }) => (
  <List row>
    <List noGap>
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <LineContainer>
        <Line />
      </LineContainer>
    </List>
    <List row reponsive>
      <Period>{period}</Period>
      <List>
        <Title>{title}</Title>
        <Place href={link} target="_blank">
          {place}&emsp;
          <VscLinkExternal />
        </Place>
        <Description>
          <small>{description}</small>
        </Description>
        {bullets ? (
          <List>
            {bullets.map((bullet, index) => (
              <Bullet key={bullet + index}>{bullet}</Bullet>
            ))}
          </List>
        ) : null}
      </List>
    </List>
  </List>
);

const Experiences = () => (
  <Section fullHeight nopadding id="About">
    <SectionDivider colorAlt divider xMargin />
    <SectionTitle xMargin>About</SectionTitle>
    <SectionText xMargin>
      I've worked with a range a technologies in the web development. From
      Back-end To Design.
    </SectionText>
    <ListContainer xMargin>
      <List>
        {experiences.map((experience) => (
          <Experience key={experience.period} {...experience} />
        ))}
      </List>
    </ListContainer>
  </Section>
);

export default Experiences;
