import React from "react";
import { render } from "react-dom";
import PageOne from "./components/pageOne";
import './assets/css/index.css'

function App() {
  return (
    <div className='flexWrapper'>
      <div className='titleWrapper'>
        <div className='title'>Amanda & Brandon</div>
        <div className='subTitle'>November 5th, 2020 </div>
      </div>
      <PageOne/>
      <div className='footerWrapper'>
        <a href="https://www.blackbutteranch.com/weddings/elopements/" target="blank">Black Bute Ranch</a>
        <a href="https://www.instagram.com/lucyfotomama/?hl=en" target="blank">Lucy Hobbs Photography</a>
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));
