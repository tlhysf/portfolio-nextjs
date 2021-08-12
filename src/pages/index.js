import React, { useState, useEffect } from "react";

import Acomplishments from "../components/Acomplishments/Acomplishments";
import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";

const Home = () => {
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

  // console.log(scroll);

  return (
    <Layout scroll={scroll}>
      <Banner />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
