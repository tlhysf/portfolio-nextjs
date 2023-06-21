import React, { useState, useEffect } from "react";

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
  ImageWrapper,
} from "./Styles";

import { VscGithubAlt, VscLinkExternal, VscZoomIn } from "react-icons/vsc";

import axios from "axios";

const Project = ({ data, setGalleryState }) => {
  const { title, description, folderName, tags, source, demo } = data;

  const [openDrawer, setOpenDrawer] = useState(false);

  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const rootURL = "https://portfolio-server-tlhysf.vercel.app/images";

    if (folderName) {
      axios
        .get(rootURL + "/" + folderName)
        .then((response) => {
          setImageURLs(
            response.data.map(
              (imageFileName) =>
                rootURL + "/" + folderName + "/" + imageFileName
            )
          );
        })
        .catch((error) => {
          setImageURLs([]);
          console.error(error);
        });
    }
  }, []);

  const renderActions = (drawer) => (
    <CardMarkup row>
      <List row smallGap>
        <ExternalLink href={demo} target="_blank" altHover>
          <Tooltip content={demo ? "Demo" : "Not available."}>
            <VscLinkExternal />
          </Tooltip>
        </ExternalLink>
        <ExternalLink href={source} target="_blank" altHover>
          <Tooltip content={source ? "Code" : "Not available."}>
            <VscGithubAlt />
          </Tooltip>
        </ExternalLink>
      </List>
      <DescriptionButton onClick={(e) => setOpenDrawer((x) => !x)}>
        {drawer ? "Close" : "Description"}
      </DescriptionButton>
    </CardMarkup>
  );

  const renderImage = imageURLs[0] ? (
    <ImageWrapper
      onClick={(e) => setGalleryState({ images: imageURLs, title, open: true })}
    >
      <Image fullWidth src={imageURLs[0]} alt={title} />

      <ImageButton>
        <VscZoomIn />
      </ImageButton>
    </ImageWrapper>
  ) : (
    <ImageWrapper>
      <Image fullWidth src={"project.jpg"} alt={title} />
    </ImageWrapper>
  );

  return (
    <Card>
      <Divider fullWidth />
      <CardMarkup>
        {renderImage}

        <CardMarkup smallPadding>
          <List smallGap>
            <Divider />
            <Title>{title}</Title>
            <TagList>
              {Array.isArray(tags)
                ? tags.map((tag, index) => (
                    <Tag key={tag + String(index)}>{tag}</Tag>
                  ))
                : null}
            </TagList>
          </List>
          <br />
          {renderActions()}
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
          {renderActions(true)}
        </CardMarkup>
      </Drawer>
    </Card>
  );
};

export default Project;
