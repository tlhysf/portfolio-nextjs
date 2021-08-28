import React, { useState } from "react";

import Tooltip from "components/Common/Tooltip";

import {
  Drawer,
  Card,
  Tag,
  Divider,
  Image,
  Container,
  Button,
} from "components/Projects/Styles";

import { Title, ExternalLink, Text, List } from "components/Common/Styles";

import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const Project = ({ data }) => {
  const { title, description, image, tags, source, demo } = data;

  const [openDrawer, setOpenDrawer] = useState(false);

  const actions = (
    <Container row smallGap>
      <List row smallGap>
        <ExternalLink href={demo} tagret="_blank" altHover>
          <Tooltip content="Demo">
            <VscLinkExternal />
          </Tooltip>
        </ExternalLink>
        <ExternalLink href={source} tagret="_blank" altHover>
          <Tooltip content="Code">
            <VscGithubAlt />
          </Tooltip>
        </ExternalLink>
      </List>
      <Button onClick={(e) => setOpenDrawer((x) => !x)}>
        {openDrawer ? "Close" : "Description"}
      </Button>
    </Container>
  );

  return (
    <Card>
      <Container>
        <Image src={image} alt={title} />
        <Container smallPadding>
          <List smallGap>
            <Divider length={title.length} />
            <Title>{title}</Title>
            <List row smallGap>
              {tags.map((tag, index) => (
                <Tag key={tag + index}>{tag}</Tag>
              ))}
            </List>
          </List>
          {actions}
        </Container>
      </Container>
      <Drawer open={openDrawer}>
        <Container largePadding>
          <div />
          <Text alt>{description}</Text>
          {actions}
        </Container>
      </Drawer>
    </Card>
  );
};

export default Project;
