import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Companies",
    path: "/companies",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">

        {menuItems.map((item) => (
          <li
            key={item.path}
            className="relative cursor-pointer text-[15px] font-medium text-slate-700 transition-all duration-300 hover:text-[#0EA5E9] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0EA5E9] after:transition-all after:duration-300 hover:after:w-full"
          >
            <Link to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}


        <li className="ml-4 flex items-center gap-4">

          <Link to="/login">
            <button className="rounded-full border border-[#0EA5E9] px-6 py-2 font-semibold text-[#0EA5E9] transition-all duration-300 hover:bg-[#0EA5E9] hover:text-white">
              Login
            </button>
          </Link>


          <Link to="/register">
            <button className="rounded-full bg-[#0EA5E9] px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0284C7] hover:shadow-lg">
              Register
            </button>
          </Link>

        </li>

      </ul>
    </nav>
  );
};

export default Menu;