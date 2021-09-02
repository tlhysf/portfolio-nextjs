import React, { useState } from "react";

import { Title, ExternalLink, Text, List } from "components/Common/Misc";
import Tooltip from "components/Common/Tooltip";

import {
  Drawer,
  Card,
  CardMarkup,
  Divider,
  Image,
  ImageButton,
  TagList,
  Tag,
  DescriptionContainer,
  DescriptionButton,
  ImageContainer,
} from "./Styles";

import { VscGithubAlt, VscLinkExternal, VscZoomIn } from "react-icons/vsc";

const Project = ({ data, setGalleryState }) => {
  const { title, description, images, tags, source, demo } = data;

  const [openDrawer, setOpenDrawer] = useState(false);

  const actions = (drawer) => (
    <CardMarkup row>
      <List row smallGap>
        <ExternalLink href={demo} target="_blank" altHover>
          <Tooltip content={demo ? "Demo" : "Demo not available."}>
            <VscLinkExternal />
          </Tooltip>
        </ExternalLink>
        <ExternalLink href={source} target="_blank" altHover>
          <Tooltip
            content={source ? "Code" : "Note allowed to share the code."}
          >
            <VscGithubAlt />
          </Tooltip>
        </ExternalLink>
      </List>
      <DescriptionButton onClick={(e) => setOpenDrawer((x) => !x)}>
        {drawer ? "Close" : "Description"}
      </DescriptionButton>
    </CardMarkup>
  );

  return (
    <Card>
      <CardMarkup>
        {images ? (
          <ImageContainer
            onClick={(e) => setGalleryState({ images, title, open: true })}
          >
            <Image fullWidth src={images[0]} alt={title} />
            <ImageButton>
              <VscZoomIn />
            </ImageButton>
          </ImageContainer>
        ) : null}

        <CardMarkup smallPadding>
          <List smallGap>
            <Divider />
            <Title>{title}</Title>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={tag + String(index)}>{tag}</Tag>
              ))}
            </TagList>
          </List>
          <br />
          {actions()}
        </CardMarkup>
      </CardMarkup>
      <Drawer open={openDrawer}>
        <CardMarkup smallPadding>
          <DescriptionContainer>
            {Array.isArray(description)
              ? description.map((x, i) => (
                  <Text bright key={i}>
                    {x}
                  </Text>
                ))
              : null}
          </DescriptionContainer>
          {actions(true)}
        </CardMarkup>
      </Drawer>
    </Card>
  );
};

export default Project;
