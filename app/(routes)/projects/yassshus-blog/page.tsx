import ProjectDemo from "@/components/project/ProjectDemo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-white max-w-7xl w-full space-y-5">
      {/* bg grids */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute left-0 top-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* ProjectDemo includes iframe for demo videos and title of project */}
      <ProjectDemo
        iframeSrc="https://www.youtube.com/embed/hhS1gHjmFi0?si=dcG5Dp179WLLdDxn"
        projectTitle="Yassshu's blog"
        projectDes="With Admin dashboard"
      />
    </div>
  );
};

export default page;
