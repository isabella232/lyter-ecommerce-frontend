import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function BabyCare({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="baby-care-page-container category-page-container">
        <div className="baby-care-title catchphrase">
          Your baby deserves the&nbsp; <u>best</u>.&nbsp;
        </div>
      </div>
      <div className="baby-care-items category-items">
        {data.baby_care.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
