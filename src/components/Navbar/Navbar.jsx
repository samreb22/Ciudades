import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const rutaActual = location.pathname;

  return (
    <nav className="menu-navegacion">
      <div className="menu-columna-1">
        <NavLink exact to="/">
          <img src="/images/logo.png" alt="Logo de la app de una ciudad" className="logo" />
        </NavLink>
      </div>
      <div className="menu-columna-2">
        <h1 className="titulo">Ciudades</h1>
      </div>
      <div className="menu-columna-3">
        <NavLink exact to="/" className={({ isActive }) => isActive || rutaActual.includes("search") ? "link-activado" : "link-desactivado"}>Buscar</NavLink>
        <NavLink exact to="/historial" className={({ isActive }) => isActive ? "link-activado" : "link-desactivado"}>Historial</NavLink>
      </div>
    </nav>
  );
};
