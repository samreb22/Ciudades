import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import PrincipalPage from "./pages/PrincipalPage/PrincipalPage";
import ResultadosPage from "./pages/ResultadosPage/ResultadosPage";
import HistorialPage from "./pages/HistorialPage/HistorialPage";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));


export const AppRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<PrincipalPage></PrincipalPage>}></Route>
        <Route exact path="/search/:code" element={<ResultadosPage></ResultadosPage>}></Route>
        <Route exact path="/historial" element={<HistorialPage></HistorialPage>}></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <ErrorPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
