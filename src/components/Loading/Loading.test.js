import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Loading } from "./Loading";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Text for Loading", () => {
  it("Montaje de componente correcto", () => {
    act(() => {
      render(<Loading />, container);
    });
    expect(container.querySelector("#componentLoading")).not.toBe(null);
  });
});
