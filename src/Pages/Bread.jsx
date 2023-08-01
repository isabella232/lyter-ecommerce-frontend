import React from "react";
import CategoryCardList from "../Components/CategoryCardList";
import data from "../DummyData/data.js";
export default function Bread({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="bread-page-container category-page-container">
        <div className="bread-title catchphrase">
          Perfectly baked,&nbsp; <u>fresh</u> &nbsp;bread.
        </div>
      </div>
      <div className="bread-items category-items">
        <CategoryCardList img={data.img} title={data.title} description={data.description} price={data.price} />
      </div>
    </div>
  );
}
