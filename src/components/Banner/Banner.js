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

const Banner = () => (
  <div>
    <Section fullHeight id="Home">
      <Container>
        <TextContainer>
          <Greeting>Hi there 👋, I’m</Greeting>
          <Heading>Talha Yousuf</Heading>
          <SubHeading>Fullstack Web Developer</SubHeading>
          <Text>Islamabad, Pakistan</Text>
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
