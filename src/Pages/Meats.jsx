import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Meats({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="meats-page-container category-page-container">
        <div className="meats-title catchphrase">
          Can't have a&nbsp; <u>summer cookout</u> &nbsp;without meat!
        </div>
      </div>
      <div className="meats-items category-items">
        {data.meats.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
