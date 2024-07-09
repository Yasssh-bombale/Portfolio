import Destination from "@/components/project/Destination";
import ProjectDemo from "@/components/project/ProjectDemo";
import ProjectSpotLight from "@/components/project/ProjectSpotLight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { yasshusBlog } from "@/data/index";
import React from "react";

const page = () => {
  const developers = [
    {
      id: 1,
      name: "Yash Bombale",
      designation: "Web developer",
      image: "/yash1.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl w-full gap-5">
      {/* bg grids */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute left-0 top-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* ProjectDemo includes iframe for demo videos and title of project */}
      <ProjectDemo
        iframeSrc="https://www.youtube.com/embed/lIe0lPS7h1Y?si=O0MG8oYJeqsgAJsf"
        projectTitle="Yassshu's blog"
        projectDes="With Admin dashboard"
        highlightedUnderline
      />

      {/* project live link and source code link button */}
      <Destination
        imageSrc="/blog.png"
        liveLink="https://yassshus-blog.onrender.com"
        githubLink="https://github.com/Yasssh-bombale/YASSSHUS-BLOG"
      />

      {/* developers logo and name */}
      <div className="flex items-center justify-center  max-w-3xl w-full">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mr-4  z-50">
          Developed by -
        </h1>
        <AnimatedTooltip items={developers} />
      </div>

      {/* project spotlight */}
      <h1 className="heading mb-10 z-50">
        Spotlight of the <span className="text-purple">project</span>
      </h1>
      <ProjectSpotLight
        leftBulletPoints={yasshusBlog.leftBulletPoints}
        rightBulletPoints={yasshusBlog.rightBulletPoints}
      />
    </div>
  );
};

export default page;
