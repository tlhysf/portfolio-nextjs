import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "components/Projects/ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/SectionStyles";

import { projects } from "data/projects";

const Projects = () => (
  <Section fullHeight nopadding id="Projects">
    <SectionDivider colorAlt divider />

    <SectionTitle main>Projects</SectionTitle>
  </Section>
);

export default Projects;
