import React, { useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/SectionStyles";
import { List } from "components/Timeline/Styles";
import Step from "components/Timeline/Step";

import { timeline } from "data/timeline";

const Timeline = () => {
  const [expanded, setExpanded] = useState(0);

  const widthFactor = Math.max(...timeline.map((x) => x.period.length));

  return (
    <Section fullHeight nopadding id="Timeline" flexCenter>
      <SectionDivider />
      <SectionTitle>Timeline</SectionTitle>
      <div>
        <List noGap>
          {timeline.map((data, index) => (
            <Step
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
      </div>
    </Section>
  );
};

export default Timeline;
