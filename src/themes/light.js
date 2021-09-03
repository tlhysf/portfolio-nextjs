export default {
  id: "light",

  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif",
  },
  colors: {
    accent: {
      primary: "#945DD6",
      secondary: "#FF6B6B",
      tertiary: "#7F557D",
      hover: "#AFE3C0",
    },

    text: {
      primary: "#692DB4",
      secondary: "#41292C",
    },

    bg: {
      primary: "#FFFddd",
      secondary: "#9ABCA7",
      tertiary: "",
    },

    gradients: {
      primary: "linear-gradient(270deg, #f56038 0%, #945DD6 100%)",
      secondary: "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
      text: "linear-gradient(121.57deg, #485564 18.77%, rgba(0, 0, 0, 0.66) 60.15%)",
    },

    blog: {
      bgLighter: "#a564c2",
      bg: "#8e45ae",
      bgDarker: "#612f77",
      title: "#fff",
      text: "#8892b0",
    },
  },

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
    gallery: "12",
  },
};
