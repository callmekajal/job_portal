import React from "react";
import Logo from "../ui/Logo";
import Menu from "../ui/Manu";

// w-full bg-gradient-to-r from-[#14213D] to-[#0EA5E9]

const MainNavbar = () => {
  return (
    <header className="sticky top-0 z-50  shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default MainNavbar;