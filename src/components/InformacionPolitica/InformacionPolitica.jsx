import styles from "./InformacionPolitica.module.css";
import banderas from "../../config/banderas.json";

export const InformacionPolitica = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.bandera}
        src={banderas[props.infoPostalCode.abbreviation].src}
        alt={banderas[props.infoPostalCode.abbreviation].alt}
      />
      <div className={styles.informacion}>
        <p><b>Ciudad: </b>{props.infoPostalCode.ciudad}</p>
        <p><b>Comunidad: </b>{props.infoPostalCode.comunidad}</p>
      </div>
    </div>
  );
};
