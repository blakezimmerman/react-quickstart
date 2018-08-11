import React from "react";
import { render } from "react-dom";
import { App } from "./containers/App";

const renderRoot = (Component: any) => {
  render(<Component />, document.getElementById("root"));
};

renderRoot(App);

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    renderRoot(require("./containers/App").default);
  });
}
