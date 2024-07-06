import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { ExternalLink } from "lucide-react";

const RecentProjects = () => {
  return (
    <div className="py-10">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* projects cards */}

      <div className="flex flex-wrap items-center justify-center gap-16 mt-10 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw] sm:w-96"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] lg:h-[30vh] mb-10 overflow-hidden">
                <div className="h-full w-full relative overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src={"/bg.png"} alt={"bg-img"} />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute z-10 bottom-0"
                />
              </div>
              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                {project.title}
              </h1>
              <p className="text-sm font-light lg:text-xl lg:font-normal line-clamp-2">
                {project.des}
              </p>

              {/* tech stacks used in the projects */}
              <div className="mt-7 mb-3 flex items-center justify-between">
                {/* tech icons */}
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                {/* checkout live site link */}
                <div className="flex items-center justify-center">
                  <p className="text-xs md:text-sm  flex text-purple font-normal">
                    Check live site
                  </p>
                  <ExternalLink size={18} color="#CBACF9" className="ml-2" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
