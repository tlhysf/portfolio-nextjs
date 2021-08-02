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
      <div
        style={{
          position: "absolute",
          display: openMobileMenu ? "flex" : "none",
          background: "black",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        onClick={toggleMobileMenu}
      >
        hello
      </div>
      <Header {...{ toggleMobileMenu }} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
