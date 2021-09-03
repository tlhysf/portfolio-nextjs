import React, { useState, useEffect } from "react";

import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Timeline from "components/Timeline/Timeline";
import Gallery from "components/Common/Gallery";
import { Layout } from "../layout/Layout";

import ScrollContextProvider from "Context/ScrollContext";

const Home = () => {
  const [galleryState, setGalleryState] = useState({
    title: "",
    images: [],
    open: false,
  });

  return (
    <ScrollContextProvider>
      <Layout>
        <Gallery {...{ galleryState, setGalleryState }} />
        <Banner />
        <Skills />
        <Timeline />
        <Projects {...{ setGalleryState }} />
      </Layout>
    </ScrollContextProvider>
  );
};

export default Home;
