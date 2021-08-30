import React from "react";

import { Section, SectionText, SectionTitle } from "components/Common/Section";
import { Button } from "components/Common/Buttons";
import BackgroundAnimation from "components/Common/BackgroundAnimation";

import { BannerContent, BannerBgContainer } from "./Styles";

const Banner = () => (
  <div>
    <Section nopadding fullHeight>
      <BannerBgContainer>
        <BackgroundAnimation />
      </BannerBgContainer>
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
        <Button>Get In Touch</Button>
      </BannerContent>
    </Section>
  </div>
);

export default Banner;
