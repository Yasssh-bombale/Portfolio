import React from "react";
import BulletPoints from "./BulletPoints";

type Props = {
  leftBulletPoints: string[];
  rightBulletPoints: string[];
};

const TechStacks = ({ leftBulletPoints, rightBulletPoints }: Props) => {
  return (
    <div className="w-full  flex flex-col md:flex-row justify-center  md:divide-x-2 md:divide-dashed md:divide-white-200 px-2 z-50 mb-10">
      {/* left bullet points */}
      <div className="flex flex-col  flex-1 px-5">
        <ul className="flex flex-col gap-2">
          {leftBulletPoints.map((point, index) => (
            <BulletPoints key={index} point={point} />
          ))}
        </ul>
      </div>
      {/* right bullet points */}
      <div className="flex flex-col  flex-1 px-5">
        <ul className="flex flex-col gap-2">
          {rightBulletPoints.map((point, index) => (
            <BulletPoints key={index} point={point} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStacks;
