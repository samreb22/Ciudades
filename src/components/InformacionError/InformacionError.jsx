import React from "react";
import styles from "./InformacionError.module.css";
import { useNavigate } from "react-router-dom";

export const InformacionError = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  }

  return (
    <div id="componentInformacionError">
      <div className={styles.contenido}>
        <h1 className={styles.titulo}>404</h1>
        <p className={styles.notFound}>PÁGINA NO ENCONTRADA</p>
        <p className={styles.mensaje}>La página a la que estás intentando acceder no está disponible.</p>
        <button id="boton" className={styles.boton} onClick={handleNavigate}>Volver a inicio</button>
      </div>
    </div>
  );
};
