import React from "react";
import GridCell from "./Grid/grid-cell";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
}

const SectionHeading = ({
  title,
  className,
  rowStart,
  rowEnd,
  columnStart,
  columnEnd,
  color,
  ...props
}: SectionHeadingProps) => {
  return (
    <GridCell
      id={title.toLowerCase()}
      className={cn(
        className,
        "hover: transform hover:scale-105 hover:shadow-lg shadow-none cursor-pointer justify-start pl-3"
      )}
      rowStart={rowStart}
      rowEnd={rowEnd}
      columnStart={2}
      columnEnd={18}
      onClick={() => {
        document
          .getElementById(title.toLowerCase())
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <a
        className={cn([
          "text-xs sm:text-xl md:text-3xl  font-bold ",
          `decoration-${color} underline`,
        ])}
      >
        {title}
      </a>
    </GridCell>
  );
};

export default SectionHeading;
