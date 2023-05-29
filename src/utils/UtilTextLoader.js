import textos from "../config/textos.json";

export const getText = (id) => {
  return textos[id];
};