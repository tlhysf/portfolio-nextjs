import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "components/Common/SectionStyles";
import { CTAButton } from "components/Common/Styles";
import { BannerContent, BannerBgContainer } from "components/Banner/Styles";
import BackgroundAnimation from "components/Common/BackgroundAnimation";

const Banner = () => (
  <div>
    <Section nopadding fullHeight>
      <BannerBgContainer>
        <BackgroundAnimation />
        {/* <img src="images/banner-bg.gif" alt="banner" /> */}
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
        <CTAButton>Get In Touch</CTAButton>
      </BannerContent>
    </Section>
  </div>
);

export default Banner;
