import { useState, useEffect, useContext } from "react";
import HistorialContext from "../context/HistorialContext";

export const useFetchZipopotam = (cp) => {
  const [infoPostalCode, setInfoPostalCode] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { historial, setHistorial } = useContext(HistorialContext);

  const url = `https://api.zippopotam.us/es/${cp}`;
  const fetchPolitica = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoPostalCode({
          ciudad: data.places[0]["place name"],
          comunidad: data.places[0].state,
          abbreviation: data.places[0]["state abbreviation"],
          latitud: data.places[0].latitude,
          longitud: data.places[0].longitude
        });
        setLoading(false);
        setHistorial([{ cp: cp, ciudad: data.places[0]["place name"], comunidad: data.places[0].state }, ...historial])
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log("Ha ocurrido un error en la petición realizada: ", error);
      });
  };

  useEffect(() => {
    fetchPolitica(url);
  }, [url]);

  return { infoPostalCode, loading, error };
};
