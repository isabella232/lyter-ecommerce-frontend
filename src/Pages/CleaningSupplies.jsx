import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function CleaningSupplies({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="cleaning-supplies-page-container category-page-container">
        <div className="cleaning-supplies-title catchphrase text-center mb-4">
          Trustworthy and&nbsp;<u>reliable</u>&nbsp;cleaning supplies.
        </div>
      </div>
      <div className="cleaning-supplies-items category-items">
        {data.cleaning_supplies.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
