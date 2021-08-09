import React, { useState } from "react";

import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import SocialLinksFAB from "components/Common/SociaLinksFAB";

import { Container } from "layout/LayoutStyles";

export const Layout = ({ children, scroll }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Container>
      <Sidebar {...{ toggleSidebar, openSidebar }} />
      <SocialLinksFAB />
      <Navbar {...{ toggleSidebar, openSidebar, scroll }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
