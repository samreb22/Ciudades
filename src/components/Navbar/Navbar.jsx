import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [linkActivo, setLinkActivo] = useState("");
  const location = useLocation();
  const rutaActual = location.pathname;

  const onClickHandlerNavigate = (target) => {
    if (target === "principal") {
      navigate("/");
    } else if (target === "historial") {
      navigate("/historial");
    }
    setLinkActivo(target);
  };

  useEffect(() => {
    if (rutaActual === "/" || rutaActual.includes("/search/")) {
      setLinkActivo("principal");
    } else {
      setLinkActivo("historial");
    }
  }, []);

  return (
    <nav className="menu-navegacion">
      <div className="menu-columna-1">
        <img
          src="/images/logo.png"
          alt="Logo de la app de una ciudad"
          className="logo"
          onClick={() => onClickHandlerNavigate("principal")}
        />
      </div>
      <div className="menu-columna-2">
        <h1 className="titulo">Ciudades</h1>
      </div>
      <div className="menu-columna-3">
        <div
          className={
            linkActivo === "principal"
              ? "link-activado espacio-links"
              : "link-desactivado espacio-links"
          }
          onClick={() => onClickHandlerNavigate("principal")}
        >
          <p>Buscar</p>
        </div>
        <div
          className={
            linkActivo === "historial" ? "link-activado" : "link-desactivado"
          }
          onClick={() => onClickHandlerNavigate("historial")}
        >
          <p>Historial</p>
        </div>
      </div>
    </nav>
  );
};
