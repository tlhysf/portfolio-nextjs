import React from "react";

import { Grid } from "components/Projects/Styles";
import Project from "components/Projects/Project";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/SectionStyles";

import { projects } from "data/projects";

const Projects = () => {
  return (
    <Section fullHeight nopadding id="Projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <Grid>
        {projects.map((data, index) => (
          <Project key={data.title + String(index)} {...{ data }} />
        ))}
      </Grid>
      <br />
      <br />
    </Section>
  );
};

export default Projects;
