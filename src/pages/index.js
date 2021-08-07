import React, { useState, useEffect } from "react";

import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  // state to keep track of how many px scrolled
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    const handleScroll = () =>
      setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout scroll={scroll}>
      {/* <Section grid> */}
      <Hero />
      {/* <BgAnimation /> */}
      {/* </Section> */}
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
