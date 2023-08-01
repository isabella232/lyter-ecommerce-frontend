import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
import { nanoid } from "nanoid";
export default function Fruits({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="fruits-page-container category-page-container">
        <div className="fruits-title catchphrase text-center mb-4">
          Nothing gets you going like&nbsp;<u>fresh</u>&nbsp;fruit.
        </div>
      </div>
      <div className="fruits-items category-items">
        {data.fruits.map((item) => (
          <div key={nanoid()}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
