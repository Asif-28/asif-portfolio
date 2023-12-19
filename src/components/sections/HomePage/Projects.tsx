import Image from "next/image";

const Projects = () => {
  return (
    <div className="section py-8 ">
      <h1 className="text-2xl sm:text-4xl pb-4 sm:pb-8 font-semibold pl-3 space">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center spaceMax">
        <div className="cards max-w-md flex flex-col gap-4 border rounded-md px-1 sm:px-5 sm:py-6 py-5 mx-2 sm:mx-0 space ">
          <div className="hidden sm:flex justify-center items-center">
            <Image
              height={200}
              width={300}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <Image
              height={200}
              width={220}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>

          <p className="desc px-2 text-[15px] sm:text-base tracking-wider leading-relaxed font-light">
            This is my project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint aliquid sequi adipisci tempora suscipit
            doloribus itaque tempore numquam sapiente accusamus!
          </p>
          <div className="flex flex-row gap-6 px-2 w-full">
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Vist
            </button>
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Github
            </button>
          </div>
        </div>
        <div className="cards max-w-md flex flex-col gap-4 border rounded-md px-1 sm:px-5 sm:py-6 py-5 mx-2 sm:mx-0 space ">
          <div className="hidden sm:flex justify-center items-center">
            <Image
              height={200}
              width={300}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <Image
              height={200}
              width={220}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>

          <p className="desc px-2 text-[15px] sm:text-base tracking-wider leading-relaxed font-light">
            This is my project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint aliquid sequi adipisci tempora suscipit
            doloribus itaque tempore numquam sapiente accusamus!
          </p>
          <div className="flex flex-row gap-6 px-2 w-full">
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Vist
            </button>
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Github
            </button>
          </div>
        </div>
        <div className="cards max-w-md flex flex-col gap-4 border rounded-md px-1 sm:px-5 sm:py-6 py-5 mx-2 sm:mx-0 space ">
          <div className="hidden sm:flex justify-center items-center">
            <Image
              height={200}
              width={300}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <Image
              height={200}
              width={220}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>

          <p className="desc px-2 text-[15px] sm:text-base tracking-wider leading-relaxed font-light">
            This is my project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint aliquid sequi adipisci tempora suscipit
            doloribus itaque tempore numquam sapiente accusamus!
          </p>
          <div className="flex flex-row gap-6 px-2 w-full">
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Vist
            </button>
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Github
            </button>
          </div>
        </div>
        <div className="cards max-w-md flex flex-col gap-4 border rounded-md px-1 sm:px-5 sm:py-6 py-5 mx-2 sm:mx-0 space ">
          <div className="hidden sm:flex justify-center items-center">
            <Image
              height={200}
              width={300}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>
          <div className="sm:hidden flex justify-center items-center">
            <Image
              height={200}
              width={220}
              src={`/IMG_7155.JPG`}
              alt="project-name"
            />
          </div>

          <p className="desc px-2 text-[15px] sm:text-base tracking-wider leading-relaxed font-light">
            This is my project Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint aliquid sequi adipisci tempora suscipit
            doloribus itaque tempore numquam sapiente accusamus!
          </p>
          <div className="flex flex-row gap-6 px-2 w-full">
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Vist
            </button>
            <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 hover:font-medium w-full text-white">
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
