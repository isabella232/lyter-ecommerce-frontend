import React from "react";

const CartItem = (props) => {
  const { img, title, description, price, id } = props.data;
  return (
    <div className="cart-item" key={id}>
      <img src={img} />
      <div className="cart-item-description">
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
