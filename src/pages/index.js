import React, { useState, useEffect } from "react";

import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Timeline from "components/Timeline/Timeline";
import Gallery from "components/Common/Gallery";
import { Layout } from "../layout/Layout";

const Home = () => {
  const [galleryState, setGalleryState] = useState({
    title: "",
    images: [],
    open: false,
  });

  // state to keep track of how many px scrolled
  const [scroll, setScroll] = useState({ y: 0, yUpward: true });

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll((state) => ({
        y: window.scrollY,
        yUpward: state.y > window.scrollY,
      }));
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout scroll={scroll}>
      <Gallery {...{ galleryState, setGalleryState }} />
      <Banner />
      <Skills />
      <Timeline />
      <Projects {...{ setGalleryState }} />
    </Layout>
  );
};

export default Home;
