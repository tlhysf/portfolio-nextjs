import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { BannerContent } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section fullView>
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
        <Button>View Resume</Button>
      </BannerContent>
    </Section>
  </div>
);

export default Hero;
