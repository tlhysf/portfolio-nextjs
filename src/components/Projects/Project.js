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

import { getImageRefs, getImageURL } from "data/images";

const Project = ({ data, setGalleryState }) => {
  const { title, description, folderName, tags, source, demo } = data;

  const [openDrawer, setOpenDrawer] = useState(false);

  const [imageRefs, setimageRefs] = useState([]);
  const [imageURLs, setimageURLs] = useState([]);
  const [imageURLsSorted, setimageURLsSorted] = useState([]);

  useEffect(() => {
    if (folderName && imageRefs.length === 0)
      getImageRefs(folderName).then((x) => {
        setimageRefs(x);
      });
  }, []);

  useEffect(() => {
    if (imageRefs)
      imageRefs.forEach((ref) =>
        getImageURL(ref).then((url) => {
          if (imageURLs.indexOf(url) < 0) setimageURLs((x) => [...x, url]);
        })
      );
  }, [imageRefs]);

  useEffect(() => {
    const getFileNameFromURL = (url) => {
      const split1 = String(url).split(".png");
      const split2 = split1[0].split("%2F");
      return split2[split2.length - 1];
    };

    if (imageURLs.length === imageRefs.length) {
      const sorted = imageURLs.sort((A, B) => {
        const a = parseInt(getFileNameFromURL(A));
        const b = parseInt(getFileNameFromURL(B));
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      setimageURLsSorted(sorted);
    }
  }, [imageURLs]);

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

  const renderImage = imageURLsSorted[0] ? (
    <ImageWrapper
      onClick={(e) =>
        setGalleryState({ images: imageURLsSorted, title, open: true })
      }
    >
      <Image fullWidth src={imageURLsSorted[0]} alt={title} />

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
