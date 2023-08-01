import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Vegetables({ img, title, description, price }) {
  return (
    <div className="page-wrapper p-5">
      <div className="vegetables-page-container category-page-container">
        <div className="vegetables-title catchphrase text-center mb-4">
          Get your&nbsp;<u>nutrient rich</u>&nbsp;veggies today!
        </div>
      </div>
      <div className="vegetables-items category-items">
        {data.vegetables.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
