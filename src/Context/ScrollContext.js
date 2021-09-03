import React, { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext();

const ScrollContextProvider = (props) => {
  // state to keep track of how many px scrolled
  const [scroll, setScroll] = useState({ y: 0, yUpward: true });

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll((state) => ({
        y: window.scrollY,
        yUpward: state.y > window.scrollY,
      }));
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
