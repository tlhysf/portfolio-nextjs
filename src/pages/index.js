import React, { useState } from "react";

import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import About from "../components/About";
import Timeline from "components/Timeline/Timeline";
import Gallery from "components/Common/Gallery";
import { Layout } from "../layout/Layout";

import ContextProvider from "Context";

const Home = () => {
  const [galleryState, setGalleryState] = useState({
    title: "",
    images: [],
    open: false,
  });

  return (
    <ContextProvider>
      <Layout>
        <Gallery {...{ galleryState, setGalleryState }} />
        <Banner />
        <About />
        <Timeline />
        <Projects {...{ setGalleryState }} />
      </Layout>
    </ContextProvider>
  );
};

export default Home;
