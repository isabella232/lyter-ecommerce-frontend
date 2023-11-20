import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import { IoMdAdd,IoMdRemove  } from "react-icons/io"

const ProductDetails = () => {
  const { productDetails, setProductDetails, addMini, addToCart } =
    useContext(ShopContext);
  console.log("details : ", ProductDetails);

  const removeCom = (data) => {
    if (data.count === 1) {
      removeFromCart(data);
    } else {
      removeMini(data);
    }
  };

  return (
    <main className="fixed top-[1] left-5 xl:left-[25%] h-[70%] xl:w-[1200px] w-[95%] mx-auto px-7 
    pt-5 bg-white rounded-xl shadow-2xl shadow-gray-400">
      {/* container */}
      <div className="flex flex-col gap-6 ">
        {/* back button */}
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            setProductDetails({ selected: false });
          }}
          className="flex items-center"
        >
          <IoMdArrowRoundBack className="text-[3rem]" />
          <span className="ml-4">Back</span>
        </Link>
        {/* product details box */}
        {/* image */}
        <section className="flex sm:flex-row flex-col p-3 justify-between items-center">
          <div className="flex-[0.7] w-full flex justify-center">
            <img
              src={productDetails.details?.img}
              alt={productDetails.details?.name}
              className="object-fit object-center max-h-[250px]"
            />
          </div>
          {/* right side */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="sm:text-[1.7rem] font-semibold text-[1.5rem]">
              {productDetails.details.title}
            </h1>
            <p className="-mt-3">{productDetails.details.name}</p>

            {/* inside container */}
            <div className="p-5 max-w-[600px] rounded-md border border-gray-400">
              <h1 className="sm:text-[1.7rem] text-[1.5rem]">
                {productDetails.details?.price}$
              </h1>
              {/* horizontal */}
              <div className="flex justify-between gap-4 items-center p-3 xl:p-10">
                <div
                  class="fonts bg-gray-200 py-3 px-10 rounded-md text-center flex justify-center
               gap-[7px] items-center self-center justify-self-center"
                >
                  <IoMdAdd className="cursor-pointer" />
                  <span className="text-[1.4rem] font-semibold">{0}</span>
                  <IoMdRemove className="cursor-pointer" />
                </div>
                {/* add to cart button */}
                <button
                  className="px-5 py-3 xl:w-[400px] sm:w-[200px] rounded-md bg-green-600 hover:translate-y-1 transition-all text-white"
                  // onClick={addToCart(productDetails.details)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="p-4">
          <h1 className="sm:text-[1.7rem] pb-10 text-[1.5rem]">
            Similar Products
          </h1>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
