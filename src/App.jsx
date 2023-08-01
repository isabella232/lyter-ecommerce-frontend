import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Beverages from "./Pages/Beverages";
import Bakery from "./Pages/Bakery";
import Vegetables from "./Pages/Vegetables";
import Dairy from "./Pages/Dairy";
import Meats from "./Pages/Meats";
import FrozenFoods from "./Pages/FrozenFoods";
import CleaningSupplies from "./Pages/CleaningSupplies";
import PersonalCare from "./Pages/PersonalCare";
import BabyCare from "./Pages/BabyCare";
import Fruits from "./Pages/Fruits";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/bread" element={<Bakery />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/meats" element={<Meats />} />
        <Route path="/frozen-foods" element={<FrozenFoods />} />
        <Route path="/cleaning-supplies" element={<CleaningSupplies />} />
        <Route path="/personal-care" element={<PersonalCare />} />
        <Route path="/baby-care" element={<BabyCare />} />
      </Routes>
    </div>
  );
}
