import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { axiosInstance } from "../utils/Axios";

function NavBar() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="bg-white h-screen border px-8 py-8 w-[15rem]">
      <Link
        to={""}
        className="border-2 border-slate-400 text-slate-400 w-full text-center inline-block hover:bg-slate-400 hover:text-white duration-200 px-4 py-2 text-lg font-semibold rounded"
      >
        Add Product +
      </Link>
      <div className="border-t-2 mt-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <ul className="">
          <li className="flex items-center gap-x-2 my-2 font-medium text-lg">
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive ? "text-blue-500 capitalize" : "text-black capitalize";
              }}
            >
              Home
            </NavLink>
          </li>
          {categories.map((el, idx) => (
            <li
              key={idx}
              className="flex items-center gap-x-2 my-2 font-medium text-lg"
            >
              <NavLink
                to={`/categories/${el}`}
                className={(e) => {
                  return e.isActive ? "text-blue-500 capitalize" : "text-black capitalize";
                }}
              >
                {el}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
