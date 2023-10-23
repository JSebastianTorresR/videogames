import React from "react";
import { Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import DetailPage from "./components/DetailPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/crear" Component={FormPage} />
        <Route path="/pokemon/:id" Component={DetailPage} />
      </Routes>
    </>
  );
}
export default App;
