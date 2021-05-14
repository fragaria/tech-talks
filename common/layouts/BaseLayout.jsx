/** @jsx jsx */
import { jsx } from "theme-ui";

import SlideHeader from "../SlideHeader";

const Layout = ({ title, centered = false, vCentered = false, inverted = false, children }) => {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <SlideHeader />
      <span sx={{
        borderBottomColor: "primary",
        borderBottomWidth: "6px",
        borderBottomStyle: "solid",
        fontFamily: "heading",
        fontSize: 48,
        mb: "1rem",
      }}>{title}</span>
      <div style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: vCentered ? "center" : "start"}}>
        <div style={{textAlign: centered ? "center": "left"}}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
