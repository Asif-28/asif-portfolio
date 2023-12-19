"use client";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const SideBar = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Freelancer", "FullStack Developer", "Mern Developer"], // Strings to display
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
    <section className="section fixed top-[5.1rem] xl:left-40 z-50">
      <div className="h-[calc(100vh-100px)] w-12 rounded-2xl flex flex-col">
        <div className="hidden lg:block">
          <h1
            className="text-3xl -rotate-90 mt-[17.5rem] whitespace-nowrap font-semibold tracking-wide  "
            ref={el}
          ></h1>
        </div>
        <div className="hidden sm:flex flex-col items-center justify-end gap-6 sm:gap-8  sm:pb-6 xl:pb-10 h-full ">
          <InstagramIcon
            sx={{ fontSize: "1.7rem" }}
            className="cursor-pointer hover:animate-bounce"
          />
          <GitHubIcon
            sx={{ fontSize: "1.7rem" }}
            className="cursor-pointer hover:animate-spin"
          />
          <LinkedInIcon
            sx={{ fontSize: "1.7rem" }}
            className="cursor-pointer hover:animate-bounce"
          />
          <EmailIcon
            sx={{ fontSize: "1.7rem" }}
            className="cursor-pointer hover:animate-spin"
          />
        </div>
        <div className="sm:hidden ml-1 bg-slate-300 dark:bg-slate-600 backdrop-blur-sm flex flex-col items-center justify-between gap-6 h-48 py-4 rounded-xl w-8 mt-20">
          <InstagramIcon
            className="cursor-pointer"
            sx={{ fontSize: "1.4rem" }}
          />
          <GitHubIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
          <LinkedInIcon
            className="cursor-pointer"
            sx={{ fontSize: "1.4rem" }}
          />
          <EmailIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
