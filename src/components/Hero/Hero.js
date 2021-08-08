import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  CTAButton,
} from "../../styles/GlobalComponents";

import { BannerContent } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section fullHeight nopadding>
      <div style={{ height: "7rem" }} />
      <BannerContent>
        <SectionTitle main center>
          Hello,
          <br />
          I'm Talha.
        </SectionTitle>
        <SectionText>
          I'm a Full Stack Web Developer.
          <br />I stare at a glowing rectangle all day.
        </SectionText>
        <br />
        <CTAButton>Get In Touch</CTAButton>
      </BannerContent>
    </Section>
  </div>
);

export default Hero;
