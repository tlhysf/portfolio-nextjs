import React from "react";

import {
  Card,
  Paragraph,
  ExternalLink,
  Grid,
  Title,
  Hr,
  Headline,
  Tag,
  ContentContainer,
  List,
  Image,
} from "components/Projects/Styles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/SectionStyles";

import Tooltip from "components/Common/Tooltip";

import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

import { projects } from "data/projects";

const renderProjects = projects.map(
  ({ id, image, title, description, intro, tags, source, visit }) => (
    <Card key={id}>
      <Paragraph>{description}</Paragraph>
      <Image src={image} />
      <ContentContainer>
        <Title lg>{title}</Title>
        <Hr />
        <Headline>{intro}</Headline>
        <List>
          {tags.map((tag, index) => (
            <Tag key={tag + index}>{tag}</Tag>
          ))}
        </List>
        <br />
        <List>
          <ExternalLink href={visit} target="_blank">
            <Tooltip content="Demo">
              <VscLinkExternal />
            </Tooltip>
          </ExternalLink>
          <ExternalLink href={source} target="_blank">
            <Tooltip content="Code">
              <VscGithubAlt />
            </Tooltip>
          </ExternalLink>
        </List>
      </ContentContainer>
    </Card>
  )
);

const Projects = () => (
  <Section nopadding id="Projects">
    <SectionDivider colorAlt divider xMargin />
    <SectionTitle xMargin>Projects</SectionTitle>
    <Grid>{renderProjects}</Grid>
  </Section>
);

export default Projects;
