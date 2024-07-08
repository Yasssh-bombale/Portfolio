import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-black-100 relative overflow-hidden flex flex-col items-center justify-center mx-auto px-5 sm:px-10">
      {children}
    </div>
  );
};

export default layout;
