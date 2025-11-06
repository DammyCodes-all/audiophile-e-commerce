import React from "react";

const PageHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="font-bold tracing-[1.43px] flex items-center justify-center text-4xl h-[150px] md:h-[239px] w-full bg-theme-dark uppercase">
      {children}
    </header>
  );
};

export default PageHead;
