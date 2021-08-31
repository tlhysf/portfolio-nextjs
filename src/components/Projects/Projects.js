import React, { useState } from "react";

import { Grid } from "./Styles";
import Project from "./Project";
import Gallery from "./Gallery";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";

import { projects } from "data/projects";

const Projects = () => {
  const [galleryState, setGalleryState] = useState({
    title: "",
    images: [],
    open: false,
  });

  return (
    <Section fullHeight nopadding id="Projects">
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
      <Gallery {...{ galleryState, setGalleryState }} />
    </Section>
  );
};

export default Projects;
