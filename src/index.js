import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "@openfonts/noto-sans-kr_korean";
import "@openfonts/noto-sans-sc_chinese-simplified";
import "@openfonts/noto-sans-tc_chinese-traditional";

import EventSlides from "./templates/EventSlide";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
