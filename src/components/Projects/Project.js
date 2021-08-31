import React, { useState } from "react";

import { Title, ExternalLink, Text, List } from "components/Common/Misc";
import Tooltip from "components/Common/Tooltip";

import {
  Drawer,
  Card,
  TagList,
  Tag,
  Divider,
  Image,
  Container,
  DescriptionContainer,
  ImageContainer,
  GalleryButton,
  Button,
} from "./Styles";

import { VscGithubAlt, VscLinkExternal, VscZoomIn } from "react-icons/vsc";

const Project = ({ data, setGalleryState }) => {
  const { title, description, images, tags, source, demo } = data;

  const [openDrawer, setOpenDrawer] = useState(false);

  const actions = (drawer) => (
    <Container row>
      <List row smallGap>
        <ExternalLink href={demo} target="_blank" altHover>
          <Tooltip content="Demo">
            <VscLinkExternal />
          </Tooltip>
        </ExternalLink>
        <ExternalLink href={source} target="_blank" altHover>
          <Tooltip content="Code">
            <VscGithubAlt />
          </Tooltip>
        </ExternalLink>
      </List>
      <Button onClick={(e) => setOpenDrawer((x) => !x)}>
        {drawer ? "Close" : "Description"}
      </Button>
    </Container>
  );

  return (
    <Card>
      <Container>
        <Image src={images ? images[0] : ""} alt={title} />
        <Container smallPadding>
          <List smallGap>
            <Divider length={title.length} />
            <Title>{title}</Title>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={tag + String(index)}>{tag}</Tag>
              ))}
            </TagList>
          </List>
          <br />
          {actions()}
        </Container>
      </Container>
      <Drawer open={openDrawer}>
        <Container smallPadding>
          <DescriptionContainer>
            <Text bright>{description}</Text>
            {images
              ? images.map((image) => (
                  <ImageContainer key={image}>
                    <Image fullWidth src={image} alt={title} />

                    <GalleryButton
                      onClick={(e) =>
                        setGalleryState({ images, title, open: true })
                      }
                    >
                      <VscZoomIn />
                    </GalleryButton>
                  </ImageContainer>
                ))
              : null}
          </DescriptionContainer>
          {actions(true)}
        </Container>
      </Drawer>
    </Card>
  );
};

export default Project;
