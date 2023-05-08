import React from "react";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <img src="/images/loading.gif" alt="Gif de carga durante las peticiones" />
    </div>
  );
};
