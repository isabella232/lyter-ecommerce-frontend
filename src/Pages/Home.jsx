import React from "react";
import WeeklySpecial from "../Components/WeeklySpecial";
import BestDealsCardList from "../Components/BestDealsCardList";
import data from "../DummyData/data.js";
export default function Home() {
  const title = data.title;
  const img = data.img;
  const description = data.description;
  const price = data.price;
  return (
    <div className="home-container">
      <WeeklySpecial />
      <BestDealsCardList img={img} title={title} description={description} price={price} />
    </div>
  );
}

// img, title, description, price
