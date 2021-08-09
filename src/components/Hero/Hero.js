import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { CTAButton } from "components/Common/Styles";

import { BannerContent } from "components/Hero/HeroStyles";

const Hero = () => (
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
        <CTAButton>Get In Touch</CTAButton>
      </BannerContent>
    </Section>
  </div>
);

export default Hero;
