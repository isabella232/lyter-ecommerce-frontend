import React from "react";
import WeeklySpecial from "../Components/WeeklySpecial";
import CardList from "../Components/CardList";
import data from "../DummyData/data.js";
export default function Home() {
  const title = data.title;
  const img = data.img;
  const description = data.description;
  const price = data.price;
  return (
    <div className="home-container">
      <WeeklySpecial />
      <CardList img={img} title={title} description={description} price={price} />
    </div>
  );
}

// img, title, description, price
