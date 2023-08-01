import React from "react";
import CategoryCardList from "../Components/CategoryCardList";
import data from "../DummyData/data.js";
export default function Beverages({ img, title, description, price }) {
  return (
    <div className="page-wrapper">
      <div className="beverages-page-container category-page-container">
        <div className="beverages-title catchphrase">
          Cool off this summer with these&nbsp; <u>ice-cold</u> &nbsp;beverages.
        </div>
      </div>
      <div className="beverages-items category-items">
        <CategoryCardList img={data.img} title={data.title} description={data.description} price={data.price} />
      </div>
    </div>
  );
}
