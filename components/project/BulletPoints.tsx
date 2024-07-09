import React from "react";

type Props = {
  point: string;
};

const BulletPoints = ({ point }: Props) => {
  return (
    <li className="flex items-center gap-x-2">
      <img
        src="/verified.svg"
        alt="verified"
        className="h-7 w-7 object-cover"
      />
      <h2 className="text-base md:text-xl tracking-wider">{point}</h2>
    </li>
  );
};

export default BulletPoints;
