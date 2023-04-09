import React, { useState, useEffect } from "react";

import Footer from "components/Footer";
import Navbar from "components/Navigation/Navbar";
import Sidebar from "components/Navigation/Sidebar";

import FABs from "components/Common/FABs";

import { Container } from "layout/LayoutStyles";

export const Layout = ({ children }) => {
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
      <FABs />
      <Navbar {...{ toggleSidebar, openSidebar }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
