import Destination from "@/components/project/Destination";
import ProjectDemo from "@/components/project/ProjectDemo";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/moving-border";
import { Globe } from "lucide-react";
import React from "react";
import { VscGithubInverted } from "react-icons/vsc";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl w-full space-y-5">
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
    </div>
  );
};

export default page;
