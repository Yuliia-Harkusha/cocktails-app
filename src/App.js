import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Loader } from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/About/About"));
const ErrorPage = lazy(() => import("./pages/Error/Error"));

export const App = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cocktail/:id" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
