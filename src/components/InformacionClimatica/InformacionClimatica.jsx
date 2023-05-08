import styles from "./InformacionClimatica.module.css";
import { useFetchOpenMeteo } from "../../services/useFetchOpenMeteo";
import { Loading } from "../Loading/Loading";

export const InformacionClimatica = (props) => {
  const { climaInfo, loading } = useFetchOpenMeteo(
    props.infoPostalCode.latitud,
    props.infoPostalCode.longitud
  );

  if (loading) {
    return (
      <div className={styles.titulo}>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.titulo}>
          <p>Horas y temperaturas</p>
        </div>
        <div className={styles.informacion}>
          {climaInfo.horas.map((hora, index) => {
            return (
              <p key={index}>
                {hora.slice(11)} - ({climaInfo.temperaturas[index]} Cº)
              </p>
            );
          })}
        </div>
      </div>
    );
  }
};
