import React from "react";
import SearchIcon from "../../assets/images/navbar/search.svg";
import SellerIcon from "../../assets/images/navbar/seller.svg";
import ProfileIcon from "../../assets/images/navbar/profile.svg";
import CartIcon from "../../assets/images/navbar/cart.svg";

export const Navbar = () => {
  return (
    <nav className="mx-auto px-8 py-4 flex justify-between border bg-white sticky top-0 z-20">
      <a href="#">
        {" "}
        <h1 className="text-blue-800 text-4xl font-bold">Ekart</h1>
      </a>
      <div className="w-1/2 bg-sky-100 flex gap-2 p-2 rounded-lg">
        <img src={SearchIcon} alt="search" className="w-[1.5rem] cursor-pointer" />
        <input
          type="text"
          placeholder="Search for products, Brands and More.."
          className="w-full bg-sky-100 text-black outline-0"
        />
      </div>
      <ul className="flex justify-around gap-10">
        <li className="flex items-center justify-center gap-3">
          <a href="#" className="flex gap-3">
            <img src={SellerIcon} alt="seller" />
            <p className="w-[8rem]">Become a Seller</p>
          </a>
        </li>
        <li className="flex items-center justify-center gap-3">
          <a href="#" className="flex gap-3">
            <img src={ProfileIcon} alt="profile" />
            <p>Sign in</p>
          </a>
        </li>
        <li className="flex items-center justify-center gap-3">
          <a href="#" className="flex gap-3">
            <img src={CartIcon} alt="cart" />
            <p>Cart</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
