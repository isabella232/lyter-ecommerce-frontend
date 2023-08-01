import React from "react";
import CategoryCardList from "../Components/CategoryCardList";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Beverages({ img, title, description, price }) {
  const [bevCounter, setBevCounter] = React.useState(0);

  return (
    <div className="page-wrapper">
      <div className="beverages-page-container category-page-container">
        <div className="beverages-title catchphrase">
          Cool off this summer with these&nbsp; <u>ice-cold</u> &nbsp;beverages.
        </div>
      </div>
      <div className="beverages-items category-items">
        {/* <CategoryCardList
          img={data.beverage[bevCounter].img}
          title={data.beverage[0].title}
          description={data.beverage[0].description}
          price={data.beverage[0].price}
        /> */}

        {data.beverage.map((item) => (
          <Card img={item.img} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    </div>
  );
}
