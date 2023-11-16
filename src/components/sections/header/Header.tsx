"use client";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/ui/toggle-mode";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [active, setActive] = useState("Home");

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
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Freelancer", "FullStack Dev", "Mern Dev"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="sticky z-10 top-1 w-full px-4">
      <div className="section flex justify-between px-3 sm:px-0 sm:justify-center items-center gap-10 border rounded-xl mt-1 backdrop-blur-sm light:bg-gray-50/50 py-1 sm:py-0 ">
        <nav className="sm:flex justify-center items-center py-[1rem] hidden">
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
            <li
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col items-center gap-1 h-[30px]"
            >
              Github <div className={underlineClass(4)} />
            </li>
          </ul>
        </nav>

        <div className="sm:hidden ">
          {showMore === true ? (
            <CloseIcon
              sx={{ fontSize: "1.7rem" }}
              onClick={() => setShowMore(!showMore)}
            />
          ) : (
            <MenuIcon
              sx={{ fontSize: "1.7rem" }}
              onClick={() => setShowMore(!showMore)}
            />
          )}

          {showMore && (
            <div className="absolute text-[#00000] top-14 bg-slate-300 dark:bg-slate-600 rounded-md w-[260px] mx-auto px-4 py-6 left-8">
              <nav className="flex justify-center items-center py-[1rem] sm:hidden">
                <ul className="flex flex-col items-center justify-center gap-7 cursor-pointer">
                  <li
                    onClick={() => setActive("Home")}
                    className={`${
                      active === "Home"
                        ? "dark:bg-slate-800 bg-slate-400 px-3 py-[.3rem] rounded-md flex justify-center items-center h-[30px]"
                        : "rounded-md flex justify-center items-center h-[30px]"
                    }`}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => setActive("Contact")}
                    className={`${
                      active === "Contact"
                        ? "dark:bg-slate-800 bg-slate-400 px-3 py-[.3rem] rounded-md flex justify-center items-center h-[30px]"
                        : "rounded-md flex justify-center items-center h-[30px]"
                    }`}
                  >
                    Contact
                  </li>
                  <li
                    onClick={() => setActive("Portfolio")}
                    className={`${
                      active === "Portfolio"
                        ? "dark:bg-slate-800 bg-slate-400 px-3 py-[.3rem] rounded-md flex justify-center items-center h-[30px]"
                        : "rounded-md flex justify-center items-center h-[30px]"
                    }`}
                  >
                    Portfolio
                  </li>
                  <li
                    onClick={() => setActive("Resume")}
                    className={`${
                      active === "Resume"
                        ? "dark:bg-slate-800 bg-slate-400 px-3 py-[.3rem] rounded-md flex justify-center items-center h-[30px]"
                        : "rounded-md flex justify-center items-center h-[30px]"
                    }`}
                  >
                    Resume
                  </li>
                  <li
                    onClick={() => setActive("Github")}
                    className={`${
                      active === "Github"
                        ? "dark:bg-slate-800 bg-slate-400 px-3 py-[.3rem] rounded-md flex justify-center items-center h-[30px]"
                        : "rounded-md flex justify-center items-center h-[30px]"
                    }`}
                  >
                    Github
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div className="sm:hidden">
          <h1
            className="text-base whitespace-nowrap font-semibold tracking-wide"
            ref={el}
          ></h1>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};

export default Header;
