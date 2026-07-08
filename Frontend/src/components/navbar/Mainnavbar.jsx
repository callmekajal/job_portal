import React from "react";
import Logo from "../ui/Logo";
import Menu from "../ui/Manu";

const MainNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-3">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default MainNavbar;