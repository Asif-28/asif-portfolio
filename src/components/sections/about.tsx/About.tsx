import Image from "next/image";

const About = () => {
  return (
    <section className="section ">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-8 sm:py-12 sm:px-2">
        <Image
          className="rounded-xl hidden sm:block"
          height={200}
          width={280}
          src={`/IMG_7155.JPG`}
          alt="image-portfolio"
        />
        <Image
          className="rounded-xl sm:hidden"
          height={100}
          width={180}
          src={`/IMG_7155.JPG`}
          alt="image-portfolio"
        />
        <div className="sm:w-4/6 px-3 space ">
          <h1 className="text-2xl sm:text-4xl pb-4 font-semibold">Hey!!</h1>
          <p className="text-[15px] sm:text-xl tracking-wider leading-relaxed font-light">
            I&apos;m Passionate and dedicated full-stack Mern developer with
            expertise in React, Next.js, TypeScript, Node.js, Express, various
            libraries. Skilled in building high-performance web applications and
            crafting seamless front-end and back-end experiences. A virtuoso
            coder, weaving magic with pixels and code, transforming ideas into
            tangible digital masterpieces.
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
