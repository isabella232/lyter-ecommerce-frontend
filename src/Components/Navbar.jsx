import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "../Pages/MobileNav";
import { CSSTransition } from "react-transition-group";
import Account from "./Account";
import Cart from "./Cart";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  toggleMobileMenu
}) {
  const [isEnter, setIsEnter] = React.useState(false); //Transition state.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleHamburgerClick() {
    toggleMobileMenu();
    setIsEnter(!isEnter);
  }

  const menu = [
    { name: "vegetables", Icon: "vegetable.png", linkTo: "/vegetables" },
    { name: "fruits", Icon: "harvest.png", linkTo: "/fruits" },
    { name: "Dairy", Icon: "dairy.png", linkTo: "/dairy" },
    { name: "Meats", Icon: "meat.png", linkTo: "/meats" },
    { name: "Bakery", Icon: "bread.png", linkTo: "/bread" },
    { name: "Frozen Foods", Icon: "frozen-food.png", linkTo: "/frozen-foods" },
    { name: "Beverages", Icon: "/poinsettia.png", linkTo: "/beverages" },
    {
      name: "Cleaning Supplies",
      Icon: "cleaning-products.png",
      linkTo: "/cleaning-supplies"
    },
    {
      name: "Personal Care",
      Icon: "personal-hygiene.png",
      linkTo: "/personal-care"
    },
    { name: "Baby Care", Icon: "wipes.png", linkTo: "/baby-care" }
  ];

  useEffect(() => {
    // Function to update the screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    console.log(screenWidth, "checkers");
    // Attach the handleResize function to the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <>
      {isMobileMenuOpen && (
        <CSSTransition in={isEnter} timeout={1000} classNames="myclass">
          <MobileNav
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </CSSTransition>
      )}

      {!isMobileMenuOpen && (
        <div className="header-container p-5  w-full md:px-7">
          <div className="top-bar flex justify-between items-center">
            <div className="left-side flex items-center">
              {/* menu opener */}
              <div onClick={handleHamburgerClick} className="block md:hidden">
                <img className="w-8 h-8 mr-3" src="/menu.png" />
              </div>

              <Link to="/" className="w-24  flex">
                <div className="header-logo w-24">
                  <img className="header-logo-img w-24" src="/logo.png" />
                </div>
              </Link>
            </div>

            {/* menu lg */}
            <div className="md:flex justify-center text-white px-10 w-[80%] items-center hidden">
              {menu.map((data, index) => (
                <Link to={data.linkTo} key={index}>
                  <div className="flex flex-col gap-[5px] text-center items-center cursor-pointer">
                    <img
                      className="category-img w-[30%] h-auto"
                      src={data.Icon}
                    />
                    <span className="text-[9px] text-black"> {data.name} </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="">
              <div className="flex justify-between items-center">
                {/* Account */}
                <Account />

                {/* Cart */}
                {screenWidth <= 766 ? (
                  <Cart />
                ) : (
                  <Link to="/checkout">
                    <Cart />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <div className="header-coupon">
          <h3 className="">Today's Coupon:</h3>
          <h4 className="coupon-text">Apple20 (20% off apples)</h4>
        </div> */}

          <div className="header-searchbar mt-6 flex items-center border-b border-teal-500 py-2">
            <input
              className="header-searchbar-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Products"
            />
          </div>

          {/* <div className="header-account">
        <img className="account-icon-img" src="/account-icon.png" />
        <p className="sign-in-text">Sign In</p>
      </div> */}
        </div>
      )}
    </>
  );
}
