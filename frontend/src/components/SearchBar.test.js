import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  const component = <SearchBar />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
