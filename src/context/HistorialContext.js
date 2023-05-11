import React, { useState } from "react";

const Context = React.createContext({});

// Provider para proveer la información que nos interesa
export function HistorialContextProvider({ children }) {
  const [historial, setHistorial] = useState([]);

  return (
    <Context.Provider value={{ historial, setHistorial }}>{children}</Context.Provider>
  );
}

export default Context;