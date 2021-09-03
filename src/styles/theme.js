import { ThemeProvider } from "styled-components";
import { useState } from "react";

import dark from "../themes/dark";
import light from "../themes/light";

import GlobalStyles from "./globals";

const Theme = ({ children }) => {
  const themes = [dark, light];

  const [theme, setTheme] = useState(themes[0]);

  const changeTheme = (element = theme, setState = setTheme, list = themes) => {
    const index = list.indexOf(element);
    setState(index === list.length - 1 ? list[0] : list[index + 1]);
  };

  return (
    <ThemeProvider theme={{ ...theme, changeTheme }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
