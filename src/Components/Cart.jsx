import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import Cartcard from "./Cartcard";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, totalItems, totalPrice } =
    useContext(ShopContext);
  const [isHovering, setIsHovering] = useState(false);

  const testing = true;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="header-shopping-bag w-12 relative">
        <div className="text-[#FF0066] text-xs absolute right-[0] font-extrabold bg-[#000] rounded-[100%] px-1">
          {cartItems.length !== 0 && totalItems}
        </div>
        <img className="shopping-bag-img w-12" src="/shoppingbag.png" />
      </div>

      {isHovering && (
        <>
          {Object.keys(cartItems).length !== 0 ? (
            <div className="bg-[#fff] rounded absolute right-[15px] p-3 shadow flex flex-col gap-[5px] min-w-[18.75rem] max-w-[20%] z-[99999999]">
              {cartItems.map((data, index) => (
                <Cartcard data={data} key={index} />
              ))}

              <Link
                to="/checkout"
                className="button text-center pt-3 self-center text-[#fff] mt-7 "
                style={{ width: "100%", height: "50px" }}
              >
                checkout
              </Link>

              <hr />
              <div className="w-full flex justify-between px-2 mt-3">
                <div className="">Subtotal</div>

                <div className="">${totalPrice}</div>
              </div>
            </div>
          ) : (
            <div className="bg-[#fff] rounded absolute right-[15px] shadow min-w-[18.75rem] max-w-[20%] flex flex-col justify-center items-center p-5 z-[99999999]">
              <div className="bg-[#f5f5f5] rounded-[100%] p-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px]"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    fill="#FF0066"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
                  />
                </svg>
              </div>

              <div className="mt-2">Empty cart</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
