import React, { useState, useEffect } from "react";
import styles from "./InformacionPolitica.module.css";
import banderas from "../../config/banderas.json";

export const InformacionPolitica = (props) => {
  const [infoPolitica, setInfoPolitica] = useState({});
  const [loading, setLoading] = useState(true);

  const url = `https://api.zippopotam.us/es/${props.cp}`;
  const fetchPolitica = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoPolitica({
          ciudad: data.places[0]["place name"],
          comunidad: data.places[0].state,
          abbreviation: data.places[0]["state abbreviation"],
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPolitica(url);
  }, [url]);

  return (
    <>
      {loading ? (
        "Cargando ..."
      ) : (
        <div className={styles.container}>
          <img
            className={styles.bandera}
            src={banderas[infoPolitica.abbreviation].src}
            alt={banderas[infoPolitica.abbreviation].alt}
          />
          <div className={styles.informacion}>
            <p><b>Ciudad: </b>{infoPolitica.ciudad}</p>
            <p><b>Comunidad: </b>{infoPolitica.comunidad}</p>
          </div>
        </div>
      )}
    </>
  );
};
