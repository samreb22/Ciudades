import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { LayoutInfo } from "../../components/LayoutInfo/LayoutInfo";

const ResultadosPage = () => {
  return (
  <div>
    <SearchForm></SearchForm>
    <LayoutInfo titulo="Información política"><h1>Información política</h1></LayoutInfo>
    <LayoutInfo titulo="Información climática" height={300}><h1>Información climática</h1></LayoutInfo>
    <LayoutInfo titulo="Información geográfica"><h1>Información geográfica</h1></LayoutInfo>
  </div>);
};

export default ResultadosPage;
