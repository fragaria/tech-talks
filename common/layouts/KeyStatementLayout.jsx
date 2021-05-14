import React from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import SlideHeader from "../SlideHeader";

import bg from "./key-statement-bg.svg";

const Layout = ({ statement, children }) => {
  return (
    <>
      <SlideHeader />
      <div
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
        >
        <div sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          color: "white",
        }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
