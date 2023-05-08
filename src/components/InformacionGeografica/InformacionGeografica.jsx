import styles from "./InformacionGeografica.module.css";

export const InformacionGeografica = (props) => {

  const url = `https://www.google.com/maps/@${props.infoPostalCode.latitud},${props.infoPostalCode.longitud},${props.zoom || 13}z`;
  const handleClick = () => {
    window.open(url, '_blank');
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.informacion}>
        <p><b>Latitud: </b>{props.infoPostalCode.latitud}</p>
        <p><b>Longitud: </b>{props.infoPostalCode.longitud}</p>
      </div>
      <div className={styles.botonMapa} onClick={handleClick}>
        <img src="/images/mapa.png" alt="Imagen de un mapa en el botón" />
        <p>Ver mapa</p>
      </div>
    </div>
  );
};
