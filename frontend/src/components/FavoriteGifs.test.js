import React from "react";
import ReactDOM from "react-dom";
import FavoriteGifs from "./FavoriteGifs";

describe("FavoriteGifs", () => {
  const component = <FavoriteGifs />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
