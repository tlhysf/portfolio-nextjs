import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";

import { List } from "components/Common/Misc";

import Experience from "./Experience";

import { timeline } from "data/timeline";

const Timeline = () => {
  const [expanded, setExpanded] = useState(0);

  const widthFactor = Math.max(...timeline.map((x) => x.period.length));

  return (
    <Section fullHeight id="Timeline">
      <SectionDivider />
      <SectionTitle>Timeline</SectionTitle>
      <List noGap>
        {timeline.map((data, index) => (
          <Experience
            key={data.period}
            {...{
              data,
              index,
              expanded,
              setExpanded,
              widthFactor,
              last: index === timeline.length - 1,
            }}
          />
        ))}
      </List>
      <br />
      <br />
    </Section>
  );
};

export default Timeline;
