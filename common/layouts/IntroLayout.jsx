/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";


const Layout = ({ children, author }) => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      padding: "2rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }} sx={{
      color: "#fff",
      backgroundColor: "primary",
    }}>
      <div>{children}</div>
      <span>by {author}</span>
    </div>
  );
};

export default Layout;
