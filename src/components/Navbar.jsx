import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <Link className="text-red-600 font-bold" to="/">
        Kalai
      </Link>
      <ul class="md:flex hidden items-center gap-10">
        <li>
          <Link class="hover:text-gray-500/80 transition" to="/expense-tracker">
            Expense Tracker
          </Link>
        </li>
        <li>
          <Link class="hover:text-gray-500/80 transition" to="/weather-app">
            Weather App
          </Link>
        </li>
        <li>
          <Link class="hover:text-gray-500/80 transition" to="/search-filter">
            Search Filter App
          </Link>
        </li>
        <li>
          <Link class="hover:text-gray-500/80 transition" to="/cart">
            Shopping Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
