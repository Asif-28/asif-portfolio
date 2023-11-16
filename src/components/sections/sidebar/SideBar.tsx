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
      <div className="h-[calc(100vh-100px)] w-12 rounded-2xl flex flex-col ">
        <div className="hidden sm:block">
          <h1
            className="text-3xl -rotate-90 mt-[17.5rem] whitespace-nowrap font-semibold tracking-wide  "
            ref={el}
          ></h1>
        </div>
        <div className="flex flex-col items-center justify-end gap-6 sm:gap-8  sm:pb-6 xl:pb-10 h-full cursor-pointer">
          <InstagramIcon
            sx={{ fontSize: "1.7rem" }}
            className="hover:animate-bounce"
          />
          <GitHubIcon
            sx={{ fontSize: "1.7rem" }}
            className="hover:animate-spin"
          />
          <LinkedInIcon
            sx={{ fontSize: "1.7rem" }}
            className="hover:animate-bounce"
          />
          <EmailIcon
            sx={{ fontSize: "1.7rem" }}
            className="hover:animate-spin"
          />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
