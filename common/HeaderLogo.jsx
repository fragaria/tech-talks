import React from "react";
/** @jsx jsx */
import { jsx, Image } from "theme-ui";

import strawberry from "./layouts/strawberry.svg";

const HeaderLogo = () => {
  return (
    <div sx={{
      display: "inline-flex",
    }}>
      <Image src={strawberry} sx={{ height: "1.5rem", mr: ".5rem" }} />
      <span sx={{ fontFamily: "heading", fontSize: 24 }}>Fragaria</span>
    </div>
  )
};

export default HeaderLogo;
