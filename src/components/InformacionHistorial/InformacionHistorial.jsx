import React, { useContext } from "react";
import HistorialContext from "../../context/HistorialContext";
import { useNavigate } from "react-router-dom";
import styles from "./InformacionHistorial.module.css";

export const InformacionHistorial = () => {
    const { historial } = useContext(HistorialContext);
    const navigate = useNavigate();
  
    const handleNavigate = (postalCode) => {
      navigate("/search/" + postalCode);
    };

    return (
      historial.length === 0 ? (
        <h2 className={styles.sinInformacion}>No hay información en el historial</h2>
      ) : (
      <div className={styles.container}>
        {historial.map((data, index) => {
          return (
            <div className={styles.contenido} onClick={() => {handleNavigate(data.cp)}}>
              <div key={index} className={styles.postalCode}>{data.cp}</div>
              <div className={styles.informacion}><span>{data.ciudad} ({data.comunidad})</span></div>
            </div>
          );
        })}
      </div>)
    );
}
