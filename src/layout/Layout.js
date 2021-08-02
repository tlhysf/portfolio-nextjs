import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  console.log(openMobileMenu);

  return (
    <Container>
      <Header {...{ toggleMobileMenu }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
