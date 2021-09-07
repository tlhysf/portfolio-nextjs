import React, { useState, useEffect } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "components/Common/Section";
import { List, Text, Title } from "components/Common/Misc";
import { Button } from "components/Common/Buttons";
import SocialLinks from "components/Common/SocialLinks";
import Tooltip from "components/Common/Tooltip";

import { FiCopy, FiCheckCircle } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri";

const email = "talhayousuf.work@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyButton = () => {
    setCopied(true);
    navigator.clipboard.writeText(email);
  };

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);
  }, [copied]);

  const renderEmailButtonGroup = (
    <List row smallGap center>
      <Button autoWidth href={`mailto:${email}`} target="_blank">
        {email}
      </Button>
      <Tooltip content={copied ? "Copied" : "Copy Email"}>
        <Button autoWidth onClick={() => handleCopyButton()}>
          {copied ? <FiCheckCircle /> : <FiCopy />}
        </Button>
      </Tooltip>
    </List>
  );

  const renderCopyRight = (
    <List row smallGap center>
      <RiCopyrightLine />
      <Text>Talha Yousuf, {new Date().getFullYear()}</Text>
    </List>
  );

  return (
    <Section id="Contact" fullHeight>
      <SectionDivider />
      <SectionTitle>Get in touch!</SectionTitle>
      <Container>
        <Title>Got a question or proposal, or just want to say hello?</Title>
        <Text>Feel free shoot me an email.</Text>
        {renderEmailButtonGroup}
        <br />
        <Title>Find me on the web!</Title>
        <SocialLinks />
      </Container>
      <SectionDivider />
      {renderCopyRight}
      <br />
    </Section>
  );
};

export default Footer;

const Container = ({ children }) => (
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);
