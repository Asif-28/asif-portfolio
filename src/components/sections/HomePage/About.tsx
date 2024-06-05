import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <section className="section ">
      <div className="absolute sm:hidden ml-1 bg-slate-300 dark:bg-slate-600 backdrop-blur-sm flex flex-col items-center justify-between gap-6 h-48 py-4 rounded-xl w-8 mt-20">
        <InstagramIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
        <GitHubIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
        <LinkedInIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
        <EmailIcon className="cursor-pointer" sx={{ fontSize: "1.4rem" }} />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-8 sm:py-12 sm:px-2">
        <div className="sm:w-4/6 px-3 space ">
          <h1 className="text-2xl sm:text-5xl pb-4 font-semibold text-purple-600">
            Hi, I&apos;m Asif
          </h1>
          <div className="uppercase text-4xl md:text-8xl font-extrabold">
            <p className="">Full-Stack Developer</p>
            <p className="text-purple-600">&</p>
            <p>Freelancer</p>
          </div>
          {/* <p className="text-[15px] sm:text-xl tracking-wider leading-relaxed font-light">
            I&apos;m Passionate and dedicated full-stack Mern developer with
            expertise in React, Next.js, TypeScript, Node.js, Express, various
            libraries. Skilled in building high-performance web applications and
            crafting seamless front-end and back-end experiences. A virtuoso
            coder, weaving magic with pixels and code, transforming ideas into
            tangible digital masterpieces.
          </p> */}
        </div>
        <div>
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
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
