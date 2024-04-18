import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="section">
      <div className="space">
        <h1 className="text-2xl sm:text-3xl pb-4 sm:pb-8 font-semibold pl-3 ">
          Tech Stack:
        </h1>
        <div className="images">
          <ul>
            <li>
              <Image
                src={`/javascript-fill-svgrepo-com.svg`}
                height={100}
                width={100}
                alt="icn"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
