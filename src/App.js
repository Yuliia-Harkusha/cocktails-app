import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </>
  );
};
