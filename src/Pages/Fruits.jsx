import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Fruits({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="fruits-page-container category-page-container">
        <div className="fruits-title catchphrase">
          Nothing gets you going like&nbsp;<u>fresh</u>&nbsp;fruit.
        </div>
      </div>
      <div className="fruits-items category-items">
        {data.fruits.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}