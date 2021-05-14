import { themes } from "mdx-deck";

export default {
  ...themes.swiss,
  colors: {
    text: "black",
    background: "white",
    primary: "#ea272e",
    gray700: "#d3d3d3",
    gray900: "#eee",
  },
  styles: {
    Slide: {
      padding: "2rem",
      height: "100%",
    },
    body: {
      fontSize: 16,
    },
    h1: {
      mt: 0,
      fontSize: 62,
    },
    h2: {
      mt: "0.8em",
      mb: "1rem",
      fontSize: 42,
    },
    h3: {
      mt: "0.8em",
      mb: "1rem",
      fontSize: 32,
    },
    p: {
      my: "1rem",
      lineHeight: "1.4em",
    },
    ul: {
      my: "1rem",
      lineHeight: "1.4em",
    },
    ol: {
      my: "1rem",
      lineHeight: "1.4em",
    },
    li: {
      my: "1.4rem",
    },
    a: {
      color: "primary",
      fontFamily: "body",
    },
    hr: {
      borderTopColor: "gray700",
      borderTopWidth: "1px",
      borderTopStyle: "solid",
      my: "2rem",
    },
    pre: {
      background: "#efefef",
      py: "2rem",
      px: "1rem",
      overflow: "scroll",
      fontSize: 24,
    }
  },
  fonts: {
    body: "'Fira Sans', sans-serif",
    heading: "'Trivia Grotesk N2', Helvetica, Arial, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  text: {
    code: {
      fontFamily: "monospace",
    }
  }
};
