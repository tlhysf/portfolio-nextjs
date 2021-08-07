import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
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
        <Section row nopadding>
          <Button>View Resume</Button>
          &nbsp;&nbsp;
          <Button>Get In Touch</Button>
        </Section>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
