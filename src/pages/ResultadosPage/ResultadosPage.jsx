import React from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { LayoutCard } from "../../components/LayoutCard/LayoutCard";


const ResultadosPage = () => {
  return (
  <div>
    <SearchForm></SearchForm>
    <LayoutCard titulo="Información política"><h1>Información política</h1></LayoutCard>
    <LayoutCard titulo="Información climática" height={350}><h1>Información climática</h1></LayoutCard>
    <LayoutCard titulo="Información geográfica"><h1>Información geográfica</h1></LayoutCard>
  </div>);
};

export default ResultadosPage;
