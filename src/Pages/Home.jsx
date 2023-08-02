import React from "react";
import WeeklySpecial from "../Components/WeeklySpecial";
import data from "../DummyData/data.js";
import Card from "../Components/Card";
export default function Home() {
  return (
    <div className="home-container flex flex-col">
      <WeeklySpecial />
      <div className="cards-container-text-container">
        <p className="cards-container-text text-center mt-4 mb-4 text-3xl">This Week's Best Deals:</p>
      </div>

      <ul className="home-page-cards-container flex flex-wrap">
        {Object.keys(data).map((keyName, i) => (
          <div className="w-full basis-1/2" key={i}>
            <Card
              img={data[keyName][0].img}
              title={data[keyName][0].title}
              description={data[keyName][0].description}
              price={data[keyName][0].price}
              view="home"
            />
          </div>
        ))}
      </ul>

      {/* <div className="home-page-list-container flex flex-wrap">
        <div className="item w-full basis-1/2">1</div>
        <div className="item w-full basis-1/2">2</div>
        <div className="item w-full basis-1/2">3</div>
        <div className="item w-full basis-1/2">4</div>
      </div> */}
    </div>
  );
}
