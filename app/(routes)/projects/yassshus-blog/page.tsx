"use client";
import Destination from "@/components/project/Destination";
import ProjectDemo from "@/components/project/ProjectDemo";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { yasshusBlog } from "@/data/index";
import React, { useEffect, useState } from "react";
import BulletContainer from "@/components/project/BulletContainer";
import TimeStampsContainer from "@/components/project/TimeStampsContainer";

const page = () => {
  const [timeStamps, setTimeStamps] = useState(0);
  const [clickedTimeStamp, setClickedTimeStamp] = useState("");

  const developers = [
    {
      id: 1,
      name: "Yash Bombale",
      designation: "Web developer",
      image: "/yash1.jpg",
    },
  ];

  useEffect(() => {
    console.log("time stamps from useEffect", clickedTimeStamp);
    const text = clickedTimeStamp;
    const timeArray = text.split(":");
    const minutes = parseInt(timeArray[0]);
    const seconds = parseInt(timeArray[1]);
    const timeStamps = 60 * minutes + seconds;
    console.log(timeStamps);
    setTimeStamps(timeStamps);
  }, [clickedTimeStamp]);

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl w-full gap-5">
      {/* bg grids */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] absolute left-0 top-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* ProjectDemo includes iframe for demo videos and title of project */}
      <ProjectDemo
        iframeSrc={`https://www.youtube.com/embed/lIe0lPS7h1Y?si=O0MG8oYJeqsgAJsf&amp;start=${timeStamps}`}
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
      <BulletContainer
        leftBulletPoints={yasshusBlog.leftBulletPoints}
        rightBulletPoints={yasshusBlog.rightBulletPoints}
      />

      {/* tech stacks */}
      <h1 className="heading mb-10 z-50">
        Technologies used in <span className="text-purple">project</span>
      </h1>
      <BulletContainer
        leftBulletPoints={yasshusBlog.techStacks.leftBulletPoints}
        rightBulletPoints={yasshusBlog.techStacks.rightBulletPoints}
      />

      {/* Timestamps guidelines */}
      <h1 className="heading mb-10 z-50">
        Timestamps <span className="text-purple">guidelines</span>
      </h1>
      <TimeStampsContainer
        leftTimeStamps={yasshusBlog.timeStamps.leftTimeStamps}
        rightTimeStamps={yasshusBlog.timeStamps.rightTimeStamps}
        setClickedTimeStamp={setClickedTimeStamp}
      />
    </div>
  );
};

export default page;
