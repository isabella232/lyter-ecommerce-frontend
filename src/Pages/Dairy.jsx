import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
import { nanoid } from "nanoid";
export default function Dairy({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="dairy-page-container category-page-container">
        <div className="dairy-title catchphrase text-center mb-4 text-3xl">
          Delicious dairy products you &nbsp;<u>love</u>!
        </div>
      </div>
      <div className="dairy-items category-items">
        {data.dairy.map((item) => (
          <div key={nanoid()}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
