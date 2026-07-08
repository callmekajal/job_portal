import React from "react";

const menuItems = [
  "Home",
  "Jobs",
  "Companies",
  "Blogs",
  "Contact",
];

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {menuItems.map((item) => (
          <li
            key={item}
            className="relative cursor-pointer font-medium text-slate-700 transition-all duration-300 hover:text-[#0EA5E9] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0EA5E9] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </li>
        ))}

        <li className="ml-6 flex items-center gap-4">
          <button className="rounded-lg border border-[#0EA5E9] px-5 py-2 font-medium text-[#0EA5E9] transition-all duration-300 hover:bg-[#0EA5E9] hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-[#0EA5E9] px-5 py-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-[#0284C7] hover:shadow-lg">
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;