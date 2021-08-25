export default {
  // Temp fonts
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  // Colors for layout
  colors: {
    accent: {
      primary: "#f56038",
      secondary: "#945DD6",
      tertiary: "#13ADC7",
      hover: "#112240",
    },

    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },

    gradients: {
      primary: "linear-gradient(270deg, #f56038 0%, #945DD6 100%)",
      secondary: "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
      text: "linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
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
