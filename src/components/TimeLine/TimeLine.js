import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "components/Common/SectionStyles";

import { Container, List } from "components/Timeline/Styles";

import Experience from "components/Timeline/Experience";

import { timeline } from "data/timeline";

const Timeline = () => (
  <Section fullHeight nopadding id="About">
    <SectionDivider colorAlt divider xMargin />
    <SectionTitle xMargin>About</SectionTitle>
    <SectionText xMargin>
      I've worked with a range a technologies in the web development. From
      Back-end To Design.
    </SectionText>
    <br />
    <Container xMargin>
      <List>
        {timeline.map((experience, index) => (
          <Experience key={experience.period} {...{ ...experience, index }} />
        ))}
      </List>
    </Container>
  </Section>
);

export default Timeline;
