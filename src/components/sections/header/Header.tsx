"use client";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/ui/toggle-mode";
import React, { useState } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { theme } = useTheme();

  const handleMouseEnter = (index: any) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const underlineClass = (index: any) => {
    if (theme === "dark")
      return hoveredItem === index
        ? "bg-white w-full h-[2px] rounded-3xl"
        : "hidden";
    else
      return hoveredItem === index
        ? "bg-black w-full h-[2px] rounded-3xl"
        : "hidden";
  };

  return (
    <section className="sticky z-10 top-1 w-full">
      <div className="section flex justify-center items-center gap-10 border rounded-xl mt-1 backdrop-blur-sm light:bg-gray-50/50">
        <nav className="flex justify-center items-center py-[1rem]">
          <ul className="flex gap-7 cursor-pointer">
            <li
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center gap-1 h-[30px]"
            >
              Home <div className={underlineClass(0)} />
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center gap-1 h-[30px]"
            >
              Contact <div className={underlineClass(1)} />
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center gap-1 h-[30px]"
            >
              Portfolio <div className={underlineClass(2)} />
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center gap-1 h-[30px]"
            >
              Resume <div className={underlineClass(3)} />
            </li>
          </ul>
        </nav>
        <div>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};

export default Header;
