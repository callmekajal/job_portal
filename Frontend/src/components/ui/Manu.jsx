import React from "react";

const menuitems=[
    "Home ",
    "Jobs",
    "Companies",
    "Blogs",
    "Contect",
    
]

const Menu = () => {
  return (
    // <nav>
    //   <ul className="flex items-center gap-8">
    //     {menuItems.map((item) => (
    //       <li
    //         key={item}
    //         className="cursor-pointer font-medium text-white hover:text-pink-800 hover:bg-white transition-colors bg-pink-800 py-2 px-3 rounded-4xl border-2 boder-white"
    //       >
    //         {item}
    //       </li>
    //     ))}

    //     <li>
    //       <button className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-900 transition">
    //         Register
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
    <nav>
        <ul className="flex items-center gap-8">
            {menuitems.map((item)=>(

<li key={item}
    className="cursor-pointer font-medium text-gray-300 hover:text-pink-800 hover:bg-white transition-colors bg-[#F25022] py-2 px-3 rounded-4xl border-2 boder-white"
>
    {item}
</li>
            )

            )}
<li className="gap-5">
<button className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-900 transition">
             Login
          </button>
          <button className="rounded-lg mx-5 bg-blue-700 px-5 py-2 text-white hover:bg-blue-900 transition">
             Register
          </button>
        </li>

        </ul>
    </nav>
  );
};

export default Menu;