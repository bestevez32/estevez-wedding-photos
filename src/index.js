import React from "react";
import { render } from "react-dom";
import Page1 from "./Page1";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignContent: "center"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div style={{color:"white", maxWidth: '50%', fontSize: "4.0vw", marginTop: "1rem"}}>Amanda & Brandon</div>
        <div style={{color:"white", maxWidth: '50%', fontSize: "3.0vw", marginTop: "0.5rem"}}>November 5th, 2020 </div>
      </div>
      <Page1/>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "0.5rem", marginBottom: "0.5rem"}}>
        <div style={{color:"white", fontSize: "2.0vw", marginLeft: "1rem"}}><a style={{textDecoration: "none", color: "white"}} href="https://www.blackbutteranch.com/weddings/elopements/" target="blank">Black Bute Ranch</a></div>
        <div style={{color:"white", fontSize: "2.0vw", marginRight: "1rem"}}><a style={{textDecoration: "none", color: "white"}} href="https://www.instagram.com/lucyfotomama/?hl=en" target="blank">Lucy Hobbs Photography</a></div>
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));
