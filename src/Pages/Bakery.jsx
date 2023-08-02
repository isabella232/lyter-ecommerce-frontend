import React from "react";
import Card from "../Components/Card.jsx";
import data from "../DummyData/data.js";
import { nanoid } from "nanoid";
export default function Bakery({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="bread-page-container category-page-container">
        <div className="bread-title catchphrase text-center mb-4 text-3xl">
          Perfectly baked,&nbsp;<u>fresh</u>&nbsp;bread.
        </div>
      </div>
      <div className="bread-items category-items">
        {data.bakery.map((item) => (
          <div key={nanoid()}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
