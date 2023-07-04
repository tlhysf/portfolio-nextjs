import React from "react";

import { Section } from "components/Common/Section";
import { Button } from "components/Common/Buttons";
import SocialLinks from "components/Common/SocialLinks";

import {
  Container,
  TextContainer,
  GraphicContainer,
  Greeting,
  Heading,
  SubHeading,
  Text,
} from "./Styles";

import ParticlesAnimation from "./ParticlesAnimation";

import { banner } from "data/about";

const Banner = () => (
  <div>
    <Section fullHeight id="Home">
      <Container>
        <TextContainer>
          <Greeting>{banner.greeting}</Greeting>
          <Heading>{banner.headline1}</Heading>
          <SubHeading>{banner.headline2}</SubHeading>
          <br />
          <SocialLinks />
          <br />
          <Button autoWidth href="#Contact">
            Get In Touch
          </Button>
        </TextContainer>
        <GraphicContainer>
          <ParticlesAnimation />
        </GraphicContainer>
      </Container>
    </Section>
  </div>
);

export default Banner;
