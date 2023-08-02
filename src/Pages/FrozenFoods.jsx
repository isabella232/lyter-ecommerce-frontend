import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
import { nanoid } from "nanoid";
export default function FrozenFoods({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="frozen-foods-page-container category-page-container">
        <div className="frozen-foods-title catchphrase text-center mb-4 text-3xl">
          Easy to eat,&nbsp;<u>delicious</u>&nbsp;frozen food!
        </div>
      </div>
      <div className="frozen-foods-items category-items">
        {data.frozen_foods.map((item) => (
          <div key={nanoid()}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
