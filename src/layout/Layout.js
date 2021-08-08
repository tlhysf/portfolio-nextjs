import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Header/Sidebar";
import SocialLinksFAB from "../components/Header/SociaLinksFAB";

import { Container } from "./LayoutStyles";

export const Layout = ({ children, scroll }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  // console.log(openSidebar);

  return (
    <Container>
      <Sidebar {...{ toggleSidebar, openSidebar }} />
      <SocialLinksFAB />
      <Header {...{ toggleSidebar, openSidebar, scroll }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
