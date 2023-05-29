import { getText } from "./UtilTextLoader";

export const getTextWithVars = (id, variables) => {
  let text = getText(id);
  let valor = "";
  for (let i = 0; i < variables.length; i++) {
    if (variables[i].value){
      valor = variables[i].value;
    }
    text = text.replace("[[" + variables[i].key + "]]", valor);
  }
  return text;
};
