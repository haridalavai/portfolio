"use client";
import React, { ReactElement, useEffect } from "react";
import "./Grid.css";

// interface GridProps {
//     rows: number;
//     columns: number;
//     children: ReactElement<GridCellProps>[];
//   }

const Grid = ({ rows, columns, children }: any) => {
  const colors = [
    // all 400 shades
    "red-400",
    "pink-400",
    "purple-400",
  ];
  const [randomColor, setRandomColor] = React.useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  return (
    <div
      className="grid"
      style={{
        "--rows": rows,
        "--columns": columns,
      }}
    >
      <div className="grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const c = `bg-${randomColor}`;
          console.log(c);
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;
          return (
            <div
              className={`grid-guide hover:bg-${randomColor}`}
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