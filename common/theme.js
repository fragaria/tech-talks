import { themes } from "mdx-deck";

export default {
  ...themes.swiss,
  colors: {
    text: "black",
    background: "white",
    primary: "#ea272e",
  },
  styles: {
    Slide: {
      padding: '0',
    },
    h1: {
      mt: 0,
      fontSize: 96,
    },
    h2: {
      mt: 0,
      fontSize: 64,
      color: "primary",
    },
    h3: {
      mb: "1rem",
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
    a: {
      color: "primary",
      fontFamily: "body",
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
    body: "'Andulka Text Pro', Georgia, Palatino, serif",
    heading: "'Trivia Grotesk N2', Helvetica, Arial, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  }
  // fonts: {
  //   body: "Roboto, sans-serif",
  //   monospace: '"Roboto Mono", monospace',
  // },
};
