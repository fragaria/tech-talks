/** @jsx jsx */
import { jsx, Image } from "theme-ui";

import strawberry from "./strawberry.svg";


const Layout = ({ author, children }) => {
  return (
    <div sx={{display: "flex"}}>
      <div sx={{
        color: "text",
        backgroundColor: "white",
        fontFamily: "heading",
        width: "100%",
        height: "100%",
        textAlign: "left",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
      }}>
        <div sx={{my: "3rem"}}>
          <div sx={{fontSize: 72, margin: 0}}>{children}</div>
          <div sx={{fontSize: 24}}>by {author}</div>
        </div>
        <div sx={{
          borderLeftStyle: "solid",
          borderLeftWidth: "6px",
          borderLeftColor: "primary",
          mx: "2.5rem",
          height: "100%",
        }}/>
        <div sx={{
          display: "flex",
          alignItems: "center",
        }}>
          <Image src={strawberry} sx={{ height: "9rem", my: "3rem", mr: "2rem" }} />
          <div sx={{textAlign: "left"}}>
            <div sx={{fontSize: 72, margin: 0}}>Fragaria</div>
            <div sx={{fontSize: 24}}>We build software that <span sx={{color: "primary"}}>works</span>.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
