import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Dairy({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="dairy-page-container category-page-container">
        <div className="dairy-title catchphrase">
          Delicious dairy products you &nbsp; <u>love</u>!
        </div>
      </div>
      <div className="dairy-items category-items">
        {data.dairy.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
