import { useState, useEffect } from "react";

export const useFetchOpenMeteo = (latitud, longitud) => {
  const [climaInfo, setClimaInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m`;
  const fetchClima = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setClimaInfo({
          temperaturas: data.hourly.temperature_2m,
          horas: data.hourly.time,
        });
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log("Ha ocurrido un error en la petición realizada: ", error);
      });
  };

  useEffect(() => {
    fetchClima(url);
  }, [url]);

  return { climaInfo, loading, error };
};
