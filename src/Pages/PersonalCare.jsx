import React from "react";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function PersonalCare({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="personal-care-page-container category-page-container">
        <div className="personal-care-title catchphrase">
          Treat yourself &nbsp; <u>well</u>. &nbsp;
        </div>
      </div>
      <div className="personal-care-items category-items">
        {data.personal_care.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
