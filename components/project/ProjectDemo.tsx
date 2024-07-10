import React from "react";
import TextUnderline from "../TextUnderline";

type Props = {
  iframeSrc: string;
  projectTitle: string;
  projectDes: string;
  iFrameClass?: string;
  titleClass?: string;
  highlightedUnderline?: boolean;
};

const ProjectDemo = ({
  iframeSrc,
  projectTitle,
  iFrameClass,
  titleClass,
  projectDes,
  highlightedUnderline,
}: Props) => {
  return (
    <>
      <iframe
        id="video"
        className={`aspect-video max-w-4xl w-full z-10 rounded-lg mt-5 ${iFrameClass}`}
        src={iframeSrc}
        title="YouTube video player"
        allowFullScreen
        // mozallowfullscreen
        // msallowfullscreen
        // oallowfullscreen
        // webkitallowfullscreen
      ></iframe>
      <h1
        className={`text-lg font-bold tracking-wider sm:text-2xl sm:font-bold lg:heading  z-10 flex  justify-center text-nowrap  p-2 ${titleClass}`}
      >
        {projectTitle} -{" "}
        <span className="flex flex-col items-center justify-center ">
          {projectDes}
          {highlightedUnderline && (
            <div className="w-full">
              <TextUnderline />
            </div>
          )}
        </span>
      </h1>
    </>
  );
};

export default ProjectDemo;
