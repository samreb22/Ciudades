import { getTextWithVars } from "./UtilTextConverter";
import { getText } from "./UtilTextLoader";

jest.mock("./UtilTextLoader", () => {
  return {
    getText: jest.fn(),
  };
});

describe("Text for UtilTextConverter", () => {
  test("Comprobando getTextWithVars resultado correcto", () => {
    getText.mockImplementation(() => {
      return "texto mock [[n_tareas]]";
    });
    const texto = getTextWithVars("FINALIZADO", [
      { key: "n_tareas", value: 5 },
    ]);
    expect(texto).toBe("texto mock 5");
  });

  test("Comprobando getTextWithVars formato variables incorrecto", () => {
    getText.mockImplementation(() => {
      return "texto mock [[n_tareas]]";
    });
    const texto = getTextWithVars("FINALIZADO", [{key: "n_tareas"}]);
    expect(texto).toBe("texto mock ");
  });
});
