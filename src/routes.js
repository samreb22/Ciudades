import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";


export const AppRouter = () => {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
};
