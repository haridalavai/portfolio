"use client";
import React, { ReactElement, useEffect } from "react";
import "./Grid.css";

// interface GridProps {
//     rows: number;
//     columns: number;
//     children: ReactElement<GridCellProps>[];
//   }

const Grid = ({ rows, columns, children }: any) => {
  return (
    <div
      className="grid border border-neutral-200 dark:border-neutral-800"
      style={{
        "--rows": rows,
        "--columns": columns,
      }}
    >
      <div className="grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              className={`grid-guide border border-neutral-200 dark:border-neutral-800 `}
              style={{ "--x": x, "--y": y }}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
};

export default Grid;
