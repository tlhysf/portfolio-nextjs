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
  const [expanded, setExpanded] = useState(0);

  const widthFactor = Math.max(...timeline.map((x) => x.period.length));

  return (
    <Section fullHeight nopadding id="Timeline">
      <SectionDivider colorAlt divider xMargin />
      <SectionTitle xMargin>Timeline</SectionTitle>
      <br />
      <Container xMargin>
        <List noGap>
          {timeline.map((experience, index) => (
            <Experience
              key={experience.period}
              {...{ ...experience, index, expanded, setExpanded, widthFactor }}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default Timeline;
