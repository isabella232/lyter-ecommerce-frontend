import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Beverages({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="beverages-page-container category-page-container">
        <div className="beverages-title catchphrase">
          Cool off this summer with these&nbsp;<u>ice-cold</u>&nbsp;beverages.
        </div>
      </div>
      <div className="beverages-items category-items">
        {data.beverage.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
