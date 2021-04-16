/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useDeck } from "mdx-deck";

const Layout = ({ children, centered = false, vCentered = true, showSlideCounter = true, inverted = false }) => {
  const state = useDeck();
  const currentSlide = state.index + 1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "2rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      sx={
        inverted ? {
          color: "#fff",
          backgroundColor: "primary",
        } : {}
      }
    >
      <div style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: vCentered ? "center" : "start"}}>
        <div style={{textAlign: centered ? "center": "left"}}>
          {children}
        </div>
      </div>
      {showSlideCounter && (
        <footer style={{textAlign: "right"}}>
          <span>{currentSlide}</span>
        </footer>
        )
      }
    </div>
  );
};

export default Layout;
