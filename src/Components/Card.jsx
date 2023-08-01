import React from "react";

export default function Card({ img, title, description, price }) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img className="card-img" src={img} />
        <h2 className="card-title">{title}</h2>
        <h3 className="card-description">{description}</h3>
        <p className="card-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
