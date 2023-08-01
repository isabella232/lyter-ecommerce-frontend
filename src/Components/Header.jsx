import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-top-bar">
        <div className="header-logo">
          <img className="header-logo-img" src="/templogo.png" />
        </div>
        <div className="header-coupon">
          <h3 className="today-coupon">Today's Coupon:</h3>
          <h4 className="coupon-text">Apple20 (20% off apples)</h4>
        </div>
        <div className="header-searchbar">
          <input className="header-searchbar-input" type="text" placeholder="Search Products" />
        </div>
        <div className="header-account">
          <img className="account-icon-img" src="/account-icon.png" />
          <p className="sign-in-text">Sign In</p>
        </div>
        <div className="header-shopping-bag">
          <img className="shopping-bag-img" src="/shoppingbag.png" />
        </div>
      </div>

      <div className="header-bottom-bar">
        {/* Need to subscribe to flaticon for the rights to use these. Or swap to font awesome.*/}
        <Link to="/vegetables">
          <div className="vegetables category-container">
            <img className="category-img" src="vegetable.png" />
            Vegetables
          </div>
        </Link>
        <Link to="/fruits">
          <div className="fruits category-container">
            <img className="category-img" src="harvest.png" />
            Fruits
          </div>
        </Link>
        <Link to="/dairy">
          <div className="dairy category-container">
            <img className="category-img" src="dairy.png" />
            Dairy
          </div>
        </Link>
        <Link to="/meats">
          <div className="meat category-container">
            <img className="category-img" src="meat.png" />
            Meats
          </div>
        </Link>
        <Link to="/bread">
          <div className="bread category-container">
            <img className="category-img" src="bread.png" />
            Bakery
          </div>
        </Link>
        <Link to="/frozen-foods">
          <div className="frozen-foods category-container">
            <img className="category-img" src="frozen-food.png" />
            Frozen Foods
          </div>
        </Link>
        <Link to="/beverages">
          <div className="beverages category-container">
            <img className="category-img" src="/poinsettia.png" />
            Beverages
          </div>
        </Link>
        <Link to="/cleaning-supplies">
          <div className="cleaning-supplies category-container">
            <img className="category-img" src="cleaning-products.png" />
            Cleaning Supplies
          </div>
        </Link>

        <Link to="/personal-care">
          <div className="personal-care category-container">
            <img className="category-img" src="personal-hygiene.png" />
            Personal Care
          </div>
        </Link>
        <Link to="/baby-care">
          <div className="baby-care category-container">
            <img className="category-img" src="wipes.png" />
            Baby Care
          </div>
        </Link>
      </div>
    </div>
  );
}
