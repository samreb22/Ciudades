import React, { useState } from "react";
import "./LayoutInfo.css";

export const LayoutInfo = (props) => {
  const [minimizar, setMinimizar] = useState(true);

  const handleMinimizar = () => {
    setMinimizar(!minimizar);
  };

  return (
    <div className="container-layout">
      <div className="ventana" style={{ height: minimizar ? (props.height || 250) + "px" : "35px" }}>
        <div className="header">
          <div className="header-columna-1"></div>
          <div className="header-columna-2">
            <p className="titulo-layout">{props.titulo}</p>
          </div>
          <div className="header-columna-3">
            <div className="boton-layout" onClick={handleMinimizar}>
              {minimizar ? "-" : <>&#x25A1;</>}
            </div>
          </div>
        </div>
        <div>{minimizar ? props.children : ""}</div>
      </div>
    </div>
  );
};
