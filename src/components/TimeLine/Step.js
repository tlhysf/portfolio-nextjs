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

import Tooltip from "components/Common/Tooltip";

import { FiChevronsRight, FiCircle } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";

const Step = ({ data, index, expanded, setExpanded, widthFactor, last }) => {
  const { period, title, place, link, description } = data;
  const bullets = data.bullets ? data.bullets : [];

  const isExpanded = expanded === index;

  const delay = (seconds = 0) =>
    (isExpanded ? 0 + seconds : bullets.length - seconds) / 50;

  const dot = (
    <Dot selected={isExpanded}>{last ? <GiGraduateCap /> : <FiCircle />}</Dot>
  );

  const line = last ? null : <Line selected={isExpanded} />;

  const expandButton = (
    <Tooltip content={isExpanded ? "Minimize" : "Expand"}>
      <ExpandButton
        selected={isExpanded}
        widthFactor={widthFactor}
        onClick={(e) => setExpanded((x) => (x === index ? null : index))}
      >
        {period}
      </ExpandButton>
    </Tooltip>
  );

  const placePrefix = last ? "-" : "@";

  const renderPlace = (
    <span>
      {placePrefix}&nbsp;{place}
    </span>
  );

  const header = (
    <List row responsive noGap>
      <Title>{title}</Title>
      {link ? (
        <ExternalLink href={link} target="_blank">
          <Tooltip content={"Go to " + link}>{renderPlace}</Tooltip>
        </ExternalLink>
      ) : (
        <ExternalLink disableHover>{renderPlace}</ExternalLink>
      )}
    </List>
  );

  const subHeader = description ? (
    <BulletContainer when={isExpanded} delay={delay()}>
      <Text>
        <i>{description}</i>
      </Text>
    </BulletContainer>
  ) : null;

  const bulletPoints = bullets.map((bullet, index) => (
    <BulletContainer key={index} when={isExpanded} delay={delay(index)}>
      <BulletIcon>
        <FiChevronsRight />
      </BulletIcon>

      <Text>{bullet}</Text>
    </BulletContainer>
  ));

  const BulletPointsBottomMargin = (
    <BulletContainer when={isExpanded} delay={delay(bullets.length)} />
  );

  return (
    <List row>
      <List noGap>
        {dot}
        {line}
      </List>
      <List row responsive>
        {expandButton}
        <List noGap={last && isExpanded}>
          {header}
          <BulletList when={isExpanded} delay={delay()}>
            {subHeader}
            {bulletPoints}
            {BulletPointsBottomMargin}
          </BulletList>
        </List>
      </List>
    </List>
  );
};

export default Step;
