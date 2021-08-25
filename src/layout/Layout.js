import React, { useState, useEffect } from "react";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import SocialLinksFAB from "components/Common/SociaLinksFAB";

import { Container } from "layout/LayoutStyles";

export const Layout = ({ children, scroll }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hash, setHash] = useState(null);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleHashChange = (hash) => {
    const onHashChange = () => {
      setOpenSidebar(false);
      return hash;
    };

    setHash((state) => (hash === state ? state : onHashChange()));
  };

  useEffect(() => {
    window.addEventListener(
      "onhashchange",
      handleHashChange(window.location.hash),
      true
    );
  });

  return (
    <Container>
      <Sidebar {...{ toggleSidebar, openSidebar }} />
      <SocialLinksFAB />
      {/* <Navbar {...{ toggleSidebar, openSidebar, scroll }} /> */}
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
