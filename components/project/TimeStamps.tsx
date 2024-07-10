import Link from "next/link";
import React from "react";

type Props = {
  chapter: string;
  time: string;
  setClickedTimeStamp: React.Dispatch<React.SetStateAction<string>>;
};

const TimeStamps = ({ chapter, time, setClickedTimeStamp }: Props) => {
  const timeLineHandler = () => {
    setClickedTimeStamp(time);
  };
  return (
    <li className="flex items-center gap-x-2">
      <Link href={"#video"} className="flex items-center w-11">
        <button className="text-sky-500" onClick={timeLineHandler}>
          {time}
        </button>
      </Link>
      <h2 className="text-base md:text-xl tracking-wider">{chapter}</h2>
    </li>
  );
};

export default TimeStamps;
