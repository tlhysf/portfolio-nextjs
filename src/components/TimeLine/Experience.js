import React, { useState } from "react";

import {
  ExpandButton,
  List,
  Title,
  ExternalLink,
  Text,
  BulletContainer,
  BulletIcon,
  Reveal,
} from "components/Timeline/Styles";

import { FiChevronsRight } from "react-icons/fi";

const Experience = ({
  period,
  title,
  place,
  bullets,
  link,
  description,
  index,
}) => {
  const [expand, setExpand] = useState(false);

  // <List noGap>
  //   <CircleContainer>
  //     <Circle />
  //   </CircleContainer>
  //   <LineContainer>
  //     <Line />
  //   </LineContainer>
  // </List>;

  return (
    <List row responsive>
      <ExpandButton selected={expand} onClick={(e) => setExpand((x) => !x)}>
        {period}
      </ExpandButton>

      <List>
        <List row responsive noGap>
          <Title>{title}</Title>
          <ExternalLink href={link} target="_blank">
            @&nbsp;{place}
          </ExternalLink>
        </List>

        <Reveal when={expand}>
          <List>
            <Text>
              <i>{description}</i>
            </Text>
            {bullets ? (
              <List>
                {bullets.map((bullet, index) => (
                  <BulletContainer key={bullet + index}>
                    <BulletIcon>
                      <FiChevronsRight />
                    </BulletIcon>

                    <Text>{bullet}</Text>
                  </BulletContainer>
                ))}
              </List>
            ) : null}
          </List>
        </Reveal>
      </List>
    </List>
  );
};

export default Experience;
