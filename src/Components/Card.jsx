import React from "react";

export default function Card({ img, title, description, price, view }) {
  return (
    <>
      {view != "home" ? (
        <div className="card-wrapper flex justify-center mb-4">
          <div className="card-container">
            <div className="card-img-container">
              <img className="card-img" src={img} />
            </div>
            <div className="card-bottom-container">
              <h2 className="card-title text-xl">{title}</h2>
              <h3 className="card-description">{description}</h3>
              <p className="card-price">${price}</p>
              <button className="add-to-cart-btn mt-auto">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-wrapper-home flex justify-center mb-4">
          <div className="card-container-home">
            <div className="card-img-container-home">
              <img className="card-img-home" src={img} />
            </div>
            <div className="card-bottom-container-home">
              <h2 className="card-title text-xl-home">{title}</h2>
              <h3 className="card-description-home">{description}</h3>
              <p className="card-price-home">${price}</p>
              <button className="add-to-cart-btn-home mt-auto">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
