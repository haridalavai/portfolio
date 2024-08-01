import React from "react";

interface TickerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Ticker = ({ children }: TickerProps) => {
  //  a simple ticker component
  return (
    <div className="flex overflow-hidden">
      <div className="flex space-x-4 animate-marquee">{children}</div>
    </div>
  );
};

export default Ticker;
