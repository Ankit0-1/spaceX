import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Rockets from "../Rockets";
import ContentPge from "./ContentPge";
import App2 from "../cards/App2";

function HomePage() {
  return (
    <>
    <div className="ioXnHN gBHGdR">
    <div className="sc-bdfBQB sc-dwfUuu grkcfd cRyGxJ">
      <img height="[object Object]" alt="" width="100%" src="https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg" className="sc-bdfBQB sc-hKgJUU sc-TmdmN lgiHMH fmxCeH" />
      <NavBar />
      <ContentPge />
    </div>
    <App2 />
  </div>
  </>
  );
}

export default HomePage;
