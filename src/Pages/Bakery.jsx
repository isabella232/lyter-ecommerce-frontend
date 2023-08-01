import React from "react";
import Card from "../Components/Card.jsx";
import data from "../DummyData/data.js";
export default function Bakery({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="bread-page-container category-page-container">
        <div className="bread-title catchphrase text-center mb-4">
          Perfectly baked,&nbsp;<u>fresh</u>&nbsp;bread.
        </div>
      </div>
      <div className="bread-items category-items">
        {data.bakery.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
