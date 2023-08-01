import React from "react";

export default function Card({ img, title, description, price }) {
  return (
    <div className="card-wrapper flex justify-center">
      <div className="card-container">
        <div className="card-img-container">
          <img className="card-img" src={img} />
        </div>
        <div className="card-bottom-container">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-description">{description}</h3>
          <p className="card-price">${price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
