import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { LayoutCard } from "../../components/LayoutCard/LayoutCard";
import { InformacionPolitica } from "../../components/InformacionPolitica/InformacionPolitica";
import { useParams } from "react-router-dom";
import { useFetchZipopotam } from "../../services/useFetchZipopotam";
import { Loading } from "../../components/Loading/Loading";
import { InformacionGeografica } from "../../components/InformacionGeografica/InformacionGeografica";
import { InformacionClimatica } from "../../components/InformacionClimatica/InformacionClimatica";

const ResultadosPage = () => {
  const { code } = useParams();
  const { infoPostalCode, loading, error } = useFetchZipopotam(code);

  return (
    <div>
      <SearchForm loading={loading} />
      {loading ? (
        <Loading />
      ) : error ? (
        <p style={{margin: "20px 40px", color: "#424242"}}>Sin resultados</p>
      ) : (
        <>
          <LayoutCard titulo="Información política">
            <InformacionPolitica infoPostalCode={infoPostalCode} />
          </LayoutCard>
          <LayoutCard titulo="Información climática" height={350}>
            <InformacionClimatica infoPostalCode={infoPostalCode} />
          </LayoutCard>
          <LayoutCard titulo="Información geográfica">
            <InformacionGeografica infoPostalCode={infoPostalCode} zoom={13} />
          </LayoutCard>
        </>
      )}
    </div>
  );
};

export default ResultadosPage;
