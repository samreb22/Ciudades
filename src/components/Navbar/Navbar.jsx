import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const rutaActual = location.pathname;
  console.log(rutaActual);

  return (
    <nav className="menu-navegacion">
      <div className="menu-columna-1">
        <a href="/">
          <img src="/images/logo.png" alt="Logo de la app de una ciudad" className="logo" />
        </a>
      </div>
      <div className="menu-columna-2">
        <h1 className="titulo">Ciudades</h1>
      </div>
      <div className="menu-columna-3">
        <div className="espacio-links link-activado">
          <p>Buscar</p>
        </div>
        <div className="link-desactivado">
          <p>Historial</p>
        </div>
      </div>
    </nav>
  );
};
