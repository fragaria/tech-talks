import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import ProgressBar from "./ProgressBar";
import HeaderLogo from "./HeaderLogo";

const SlideHeader = () => {
  return (
    <div sx={{
      width: "100%",
      pb: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <ProgressBar />
      <HeaderLogo />
    </div>
  );
};

export default SlideHeader;
