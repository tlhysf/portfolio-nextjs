import React, { useState } from "react";

import { Grid } from "./Styles";
import Project from "./Project";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";

import { projects } from "data/projects";

const Projects = ({ setGalleryState }) => {
  return (
    <Section fullHeight id="Projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projects.map((data, index) => (
          <Project
            key={data.title + String(index)}
            {...{ data, setGalleryState }}
          />
        ))}
      </Grid>
      <br />
      <br />
    </Section>
  );
};

export default Projects;
