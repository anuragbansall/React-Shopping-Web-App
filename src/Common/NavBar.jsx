import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { axiosInstance } from "../utils/Axios";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProductDetailsContext } from "../Context/Context";

function NavBar() {

  const [categories, setCategories] = useState([]);
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  const fetchCategories = () => {
    try {
      axiosInstance
        .get("/products/categories")
        .then((data) => setCategories(data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  const toggleNavBar = () => {
    setNavBarIsOpen(!navBarIsOpen);
  };

  return (
    <div className="absolute md:static">
      <div className="md:hidden absolute z-10 p-4">
        <button onClick={toggleNavBar} className="text-3xl">
          {navBarIsOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`${
          navBarIsOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white h-screen border px-8 md:py-8 py-20 w-screen md:w-[15rem] md:translate-x-0 md:relative fixed top-0 left-0 transition-transform duration-300`}
      >
        <Link
          to={"/create-product"}
          className="border-2 border-slate-400 text-slate-400 w-full text-center inline-block hover:bg-slate-400 hover:text-white duration-200 px-4 py-2 text-lg font-semibold rounded"
        >
          Add Product +
        </Link>
        <div className="border-t-2 mt-6 py-4">
          <h2 className="text-3xl md:text-2xl font-semibold mb-4">Categories</h2>
          <ul className="">
            <li className="flex items-center gap-x-2 my-2 font-medium text-lg">
              <NavLink
                to="/"
                className={(e) => {
                  return e.isActive ? "text-blue-500 capitalize text-2xl md:text-xl" : "text-black capitalize text-2xl md:text-xl";
                }}
                onClick={toggleNavBar}
              >
                Home
              </NavLink>
            </li>
            {categories.map((el, idx) => (
              <li
                key={idx}
                className="flex items-center gap-x-2 my-4 md:my-2 font-medium text-lg"
              >
                <NavLink
                  to={`/categories/${el}`}
                  className={(e) => {
                    return e.isActive ? "text-blue-500 capitalize text-2xl md:text-xl" : "text-black capitalize text-2xl md:text-xl";
                  }}
                  onClick={toggleNavBar}
                >
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
