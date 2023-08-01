import React from "react";
import WeeklySpecial from "../Components/WeeklySpecial";
import BestDealsCardList from "../Components/BestDealsCardList";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Home() {
  return (
    <div className="home-container">
      <WeeklySpecial />
      <div className="cards-container-text-container">
        <p className="cards-container-text">This Week's Best Deals:</p>
      </div>
      {data.beverage.map((item) => (
        <Card img={item.img} title={item.title} description={item.description} price={item.price} />
      ))}
    </div>
  );
}
