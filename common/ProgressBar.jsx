import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDeck } from "mdx-deck";

const ProgressBar = ({ statement, showSlideCounter = true, children }) => {
  const state = useDeck();

  return (
    <div sx={{
      display: "flex",
    }}>
      {state.slides.map((slide, index) => (
        <div
          key={index}
          sx={{
            width: "1rem",
            height: "1rem",
            ml: index !== 0 && "1rem",
            backgroundColor: state.index >= index ? "primary" : "gray700"
          }}
        />
      ))}
    </div>
  )
};

export default ProgressBar;
