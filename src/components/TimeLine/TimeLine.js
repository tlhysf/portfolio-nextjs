import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "components/Common/SectionStyles";

import { Container, List } from "components/Timeline/Styles";

import Experience from "components/Timeline/Experience";

import { timeline } from "data/timeline";

const Timeline = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Section fullHeight nopadding id="About">
      <SectionDivider colorAlt divider xMargin />
      <SectionTitle xMargin>About</SectionTitle>
      <br />
      <Container xMargin>
        <List>
          {timeline.map((experience, index) => (
            <Experience
              key={experience.period}
              {...{ ...experience, index, expanded, setExpanded }}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Timeline;
