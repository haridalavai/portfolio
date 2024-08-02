import React from "react";
import GridCell from "./Grid/grid-cell";
import { Icons } from "./icons";

interface ProjectsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  link: string;
  rowStart: number;
  rowEnd: number;
  id: string;
}

const ProjectsCard = ({
  title,
  description,
  techStack,
  github,
  link,
  rowStart,
  rowEnd,
  id,
  ...props
}: ProjectsCardProps) => {
  return (
    <>
      <GridCell
        columnStart={2}
        columnEnd={4}
        rowStart={rowStart}
        rowEnd={rowEnd + 1}
        {...props}
      >
        <p className="text-xs sm:text-xl md:text-3xl  font-bold ">{id}</p>
      </GridCell>
      <GridCell
        className="justify-start pl-3"
        columnStart={4}
        columnEnd={8}
        rowStart={rowStart}
        rowEnd={rowStart}
        {...props}
      >
        <a
          className="text-xs sm:text-xl md:text-2xl  font-bold "
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </GridCell>
      <GridCell
        columnStart={8}
        columnEnd={9}
        rowStart={rowStart}
        rowEnd={rowStart}
        {...props}
      >
        <a href={github} target="_blank" rel="noreferrer">
          <Icons.github className="h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7" />
        </a>
      </GridCell>
      <GridCell
        columnStart={9}
        columnEnd={10}
        rowStart={rowStart}
        rowEnd={rowStart}
        {...props}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Icons.pixelLink className="h-3 w-3 md:h-5 md:w-5 lg:h-7 lg:w-7" />
        </a>
      </GridCell>
      <GridCell
        className="items-center pl-3"
        columnStart={4}
        columnEnd={18}
        rowStart={rowStart + 1}
        rowEnd={rowStart + 4}
        {...props}
      >
        <p className="text-xs sm:text-xl md:text-xl lg:text-2xl font-mono font-light ">
          {description}
        </p>
      </GridCell>
    </>
  );
};

export default ProjectsCard;
