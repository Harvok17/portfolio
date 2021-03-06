import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Particles, Wrapper } from "./components/styledComponents";

ReactDOM.render(
  <BrowserRouter>
    <Wrapper>
      <Particles id="particles-js" />
      <App />
    </Wrapper>
  </BrowserRouter>,
  document.getElementById("root")
);
