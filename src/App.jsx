import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Beverages from "./Pages/Beverages";
import Bread from "./Pages/Bread";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/bread" element={<Bread />} />
      </Routes>
    </div>
  );
}
