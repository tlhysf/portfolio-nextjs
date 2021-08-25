import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/SectionStyles";
import { List } from "components/Timeline/Styles";
import Experience from "components/Timeline/Experience";

import { timeline } from "data/timeline";

const Timeline = () => {
  const [expanded, setExpanded] = useState(0);

  const widthFactor = Math.max(...timeline.map((x) => x.period.length));

  return (
    <Section fullHeight nopadding id="Timeline">
      <SectionDivider />
      <SectionTitle>Timeline</SectionTitle>
      <div>
        <List noGap>
          {timeline.map((experience, index) => (
            <Experience
              key={experience.period}
              {...{ ...experience, index, expanded, setExpanded, widthFactor }}
            />
          ))}
        </List>
      </div>
    </Section>
  );
};

export default Timeline;
