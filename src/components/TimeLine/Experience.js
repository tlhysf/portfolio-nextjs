import React from "react";

import {
  Header,
  ExpandButton,
  BulletContainer,
  BulletIcon,
  BulletList,
  Dot,
  Line,
} from "./Styles";

import { List, Title, ExternalLink, Text } from "components/Common/Misc";
import Tooltip from "components/Common/Tooltip";
import { FiChevronsRight } from "react-icons/fi";
import { FaUserGraduate, FaCircle } from "react-icons/Fa";

const Experience = ({
  data,
  index,
  expanded,
  setExpanded,
  widthFactor,
  last,
}) => {
  const { period, title, place, link, description } = data;
  const bullets = data.bullets ? data.bullets : [];
  const isExpanded = expanded === index;

  const handleExpand = () => setExpanded((x) => (x === index ? null : index));
  const delay = (seconds = 0) =>
    (isExpanded ? 0 + seconds : bullets.length - seconds) / 50;

  const dot = (
    <Dot selected={isExpanded} onClick={(e) => handleExpand()}>
      {last ? <FaUserGraduate /> : <FaCircle />}
    </Dot>
  );

  const line = last ? null : <Line selected={isExpanded} />;

  const expandButton = (
    <Tooltip content={isExpanded ? "Minimize" : "Expand"}>
      <ExpandButton
        selected={isExpanded}
        widthFactor={widthFactor}
        onClick={(e) => handleExpand()}
      >
        {period}
      </ExpandButton>
    </Tooltip>
  );

  const renderPlace = <span>@&nbsp;{place}</span>;

  const header = (
    <Header>
      <List row responsive noGap>
        <Title onClick={(e) => handleExpand()}>{title}</Title>
        {link ? (
          <ExternalLink href={link} target="_blank">
            <Tooltip content={"Go to " + link}>{renderPlace}</Tooltip>
          </ExternalLink>
        ) : (
          <ExternalLink disableHover>{renderPlace}</ExternalLink>
        )}
      </List>
    </Header>
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
        <List noGap={last}>
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

export default Experience;
