import React, { useContext } from "react";
import data from "../DummyData/data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";

export const CheckoutPage = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="checkoutPage">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {data.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
    </div>
  );
};
