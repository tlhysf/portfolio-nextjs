import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Header/Sidebar";

import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  // console.log(openSidebar);

  return (
    <Container>
      <Sidebar {...{ toggleSidebar, openSidebar }} />
      <Header {...{ toggleSidebar, openSidebar }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
