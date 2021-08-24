export default {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  // Colors for layout
  colors: {
    primary1: "andy haynes(204,23.8%,95.9%)",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",

    accent: {
      primary: "#f56038",
      hover: "#112240",
    },

    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },

    bg: {
      primary: "#020c1b",
      secondary: "#0a192f",
    },

    logo: {
      main: "#ffffff",
      active: "#ffffff70",
    },

    navLink: {
      primary: {
        main: {
          color: "#ffffff90",
        },
        active: {
          color: "#ffffff70",
        },
        hover: {
          color: "#ffffff",
        },
      },
    },

    iconButton: {
      primary: {
        main: {
          color: "#ffffff",
          bg: "#ffffff00",
        },
        hover: {
          color: "#22252e",
          bg: "#ffffff",
        },
      },
      secondary: {
        main: {
          color: "#ffffff",
          bg: "#ffffff00",
        },
        hover: {
          color: "#ffffff",
          bg: "#00000050",
        },
        active: {
          color: "#ffffff",
          bg: "#00000070",
        },
      },
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: "screen and (max-width: 576px)",
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },

  zIndexes: {
    navbar: "10",
    drawer: "11",
  },
};
