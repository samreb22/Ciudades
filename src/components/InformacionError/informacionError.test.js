import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { InformacionError } from "./InformacionError";
import { BrowserRouter } from "react-router-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test for InformacionError", () => {
  // Primer test
  it("Montaje de componente correcto", () => {
    act(() => {
      render(
        <BrowserRouter>
          <InformacionError />
        </BrowserRouter>,
        container
      );
    });

    expect(container.querySelector("#componentInformacionError")).not.toBe(
      null
    );
    expect(container.textContent).toContain("404");
    expect(container.textContent).toContain("PÁGINA NO ENCONTRADA");
    expect(container.textContent).toContain(
      "La página a la que estás intentando acceder no está disponible."
    );
    expect(container.textContent).toContain("Volver a inicio");
  });

  // Segundo test
  it("Se realiza click sobre el botón correctamente", () => {
    act(() => {
      render(
        <BrowserRouter>
          <InformacionError />
        </BrowserRouter>,
        container
      );
    });

    const boton = container.querySelector("#boton");
    let clickRealizado = false;

    boton.addEventListener("click", () => {
      clickRealizado = true;
    });

    act(() => {
      boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(clickRealizado).toBe(true);
  });
});
