import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
import { nanoid } from "nanoid";
export default function BabyCare({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="baby-care-page-container category-page-container">
        <div className="baby-care-title catchphrase text-center mb-4">
          Your baby deserves the&nbsp;<u>best</u>.
        </div>
      </div>
      <div className="baby-care-items category-items">
        {data.baby_care.map((item) => (
          <div key={nanoid()}>
            <Card img={item.img} title={item.title} description={item.description} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
