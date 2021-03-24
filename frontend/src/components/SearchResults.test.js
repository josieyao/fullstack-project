import React from "react";
import ReactDOM from "react-dom";
import SearchResults from "./SearchResults";

describe("SearchResults", () => {
  const component = <SearchResults />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
