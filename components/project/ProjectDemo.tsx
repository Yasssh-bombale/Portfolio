import React from "react";
import TextUnderline from "../TextUnderline";

type Props = {
  iframeSrc: string;
  projectTitle: string;
  projectDes: string;
  iFrameClass?: string;
  titleClass?: string;
};

const ProjectDemo = ({
  iframeSrc,
  projectTitle,
  iFrameClass,
  titleClass,
  projectDes,
}: Props) => {
  return (
    <>
      <iframe
        className={`aspect-video max-w-4xl w-full z-10 rounded-lg ${iFrameClass}`}
        src={iframeSrc}
        title="YouTube video player"
        allowFullScreen
        // mozallowfullscreen
        // msallowfullscreen
        // oallowfullscreen
        // webkitallowfullscreen
      ></iframe>
      <h1 className={`heading z-10 flex  justify-center ${titleClass}`}>
        {projectTitle} -{" "}
        <span className="flex flex-col items-center justify-center  border border-white ">
          {projectDes}
          <div className="w-full">
            <TextUnderline />
          </div>
        </span>
      </h1>
    </>
  );
};

export default ProjectDemo;
