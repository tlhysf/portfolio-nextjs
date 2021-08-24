import React from "react";

import {
  ExpandButton,
  List,
  Title,
  ExternalLink,
  Text,
  BulletContainer,
  BulletIcon,
  BulletList,
  Dot,
  Line,
} from "components/Timeline/Styles";

import { FiChevronsRight, FiCircle } from "react-icons/fi";

const Experience = ({
  period,
  title,
  place,
  bullets,
  link,
  description,
  index,
  expanded,
  setExpanded,
}) => {
  const isExpanded = expanded === index;

  const delay = (seconds = 0) =>
    (isExpanded ? 0 + seconds : bullets.length - seconds) / 50;

  return (
    <List row>
      <List noGap>
        <Dot selected={isExpanded}>
          <FiCircle />
        </Dot>
        <Line selected={isExpanded} />
      </List>

      <List row responsive>
        <ExpandButton
          selected={isExpanded}
          onClick={(e) => setExpanded((x) => (x === index ? null : index))}
        >
          {period}
        </ExpandButton>

        <List>
          <List row responsive noGap>
            <Title>{title}</Title>
            <ExternalLink href={link} target="_blank">
              @&nbsp;{place}
            </ExternalLink>
          </List>

          {bullets ? (
            <BulletList when={isExpanded} delay={delay()}>
              <BulletContainer when={isExpanded} delay={delay()}>
                <Text>
                  <i>{description}</i>
                </Text>
              </BulletContainer>
              {bullets.map((bullet, index) => (
                <BulletContainer
                  key={index}
                  when={isExpanded}
                  delay={delay(index)}
                >
                  <BulletIcon>
                    <FiChevronsRight />
                  </BulletIcon>

                  <Text>{bullet}</Text>
                </BulletContainer>
              ))}
            </BulletList>
          ) : null}
        </List>
      </List>
    </List>
  );
};

export default Experience;
