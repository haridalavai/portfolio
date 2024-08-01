import { cn } from "@/lib/utils";
import React from "react";

interface GridCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rowStart?: number;
  rowEnd?: number;
  columnStart?: number;
  columnEnd?: number;
  className?: string;
}

const GridCell = ({
  children,
  rowStart,
  rowEnd,
  columnStart,
  columnEnd,
  className,
  ...props
}: GridCellProps) => {
  return (
    <div
      className={cn([
        "bg-background border-gray-300 border-r-1 border-b-1 border border-t-0 border-l-0",
        "flex items-center justify-center",
        "z-10",
        className,
      ])}
      style={{
        "grid-column": `${columnStart} / ${columnEnd}`,
        "grid-row": `${rowStart} / ${rowEnd}`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default GridCell;
