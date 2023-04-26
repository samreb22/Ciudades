import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";
import ResultadosPage from "./pages/ResultadosPage/ResultadosPage";
import HistorialPage from "./pages/HistorialPage/HistorialPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export const AppRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<PrincipalPage></PrincipalPage>}></Route>
        <Route exact path="/search/:code" element={<ResultadosPage></ResultadosPage>}></Route>
        <Route exact path="/historial" element={<HistorialPage></HistorialPage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Router>
  );
};
