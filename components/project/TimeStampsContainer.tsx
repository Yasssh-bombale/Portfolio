import React from "react";
import TimeStamps from "./TimeStamps";

type TimeStamps = {
  time: string;
  chapter: string;
};
type Props = {
  leftTimeStamps: TimeStamps[];
  rightTimeStamps: TimeStamps[];
  setClickedTimeStamp: React.Dispatch<React.SetStateAction<string>>;
};

const TimeStampsContainer = ({
  leftTimeStamps,
  rightTimeStamps,
  setClickedTimeStamp,
}: Props) => {
  return (
    <div className="w-full  flex flex-col md:flex-row justify-center  md:divide-x-2 md:divide-dashed md:divide-white-200 px-2 z-50 mb-10">
      {/* left bullet points */}
      <div className="flex flex-col  flex-1 px-5">
        <ul className="flex flex-col gap-2">
          {leftTimeStamps.map(({ chapter, time }, index) => (
            <TimeStamps
              key={index}
              chapter={chapter}
              time={time}
              setClickedTimeStamp={setClickedTimeStamp}
            />
          ))}
        </ul>
      </div>
      {/* right bullet points */}
      <div className="flex flex-col  flex-1 px-5">
        <ul className="flex flex-col gap-2">
          {rightTimeStamps.map(({ chapter, time }, index) => (
            <TimeStamps
              key={index}
              chapter={chapter}
              time={time}
              setClickedTimeStamp={setClickedTimeStamp}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeStampsContainer;
