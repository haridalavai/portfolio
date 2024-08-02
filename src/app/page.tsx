"use client";
import { DockDemo } from "@/components/Dock";
import { FileTreeDemo } from "@/components/FileTree";

import Grid from "@/components/Grid/Grid";
import { Icons } from "@/components/icons";
import Image from "next/image";
import Lottie from "react-lottie";

import animationData from "./hello.json";
import animationDataDark from "./hello-dark.json";
import ModeToggle from "@/components/mode-toggle";
import React, { useEffect, useState } from "react";
import WordRotate from "@/components/magicui/word-rotate";
import MoveStuffAround from "@/components/ticker";
import Marquee from "@/components/magicui/marquee";
import GridCell from "@/components/Grid/grid-cell";
import SectionHeading from "@/components/section-heading";
import ExperienceCard from "@/components/experience-card";
import { data } from "./data";
import ProjectsCard from "@/components/projects-card";
import BlogCard from "@/components/blog-card";
import AboutMePopup from "@/components/aboutme-popup";
import { useTheme } from "next-themes";

const ROW_WIDTH = 25;
const COLUMN_WIDTH = 25;

export default function Home() {
  const [rows, setRows] = useState(45);
  const [columns, setCoumns] = useState(18);
  const [idk, setIdk] = useState(5);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  console.log(theme);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData:
      theme === "dark" || theme === "system"
        ? animationDataDark
        : animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    // update rows and cols when window innerheight changes
    const handleResize = () => {
      // setRows(Math.max(15));
      setCoumns(Math.max(18));
      setRows(Math.max(Math.floor(window.innerHeight / ROW_WIDTH), 45));
      // setCoumns(Math.max(Math.floor(window.innerWidth / COLUMN_WIDTH), 8));
      // if (ref.current) {
      //   if (ref?.current?.scrollHeight > ref?.current?.clientHeight) {
      //     setIdk(ref.current?.scrollHeight / ref.current?.clientHeight);
      //   }
      // }
    };

    // initial

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (ref.current)
      setIdk(ref.current?.scrollHeight / ref.current?.clientHeight);
  }, [ref.current]);

  const onAboutMeClick = () => {
    console.log("clicked");
    setIsAboutMeOpen(true);
  };

  return (
    <div className="">
      {/* <FileTreeDemo /> */}
      <div className=" flex items-start justify-center mt-6 ">
        <Grid rows={rows} columns={columns}>
          <GridCell rowStart={2} rowEnd={4} columnStart={6} columnEnd={8}>
            <Icons.logoLoading className="w-17 h-17" />
          </GridCell>
          <GridCell
            rowStart={2}
            rowEnd={4}
            columnStart={8}
            columnEnd={14}
            className="dark:text-white"
          >
            <Lottie options={defaultOptions} segments={[0, 406]} />
          </GridCell>
          <GridCell rowStart={4} rowEnd={6} columnStart={4} columnEnd={16}>
            <p className="text-3xl  sm:text-4xl md:text-6xl font-bold text-center">
              I'm Srihari
            </p>
          </GridCell>
          <GridCell rowStart={6} rowEnd={8} columnStart={2} columnEnd={18}>
            <AboutMePopup />
          </GridCell>

          <GridCell rowStart={8} rowEnd={8} columnStart={1} columnEnd={19}>
            <span className="flex gap-2 justify-center">
              <Icons.cornerLeftUp className="w-4 h-4 transform:  md:h-6 md:w-6 " />
              <p className="text-xs sm:text-md md:text-xl font-mono ">
                click on the moving thing to read more about me!
              </p>
            </span>
          </GridCell>

          <GridCell rowStart={9} rowEnd={9} columnStart={1} columnEnd={19}>
            <span className="flex gap-2 justify-center items-end">
              <Icons.cornerLeftDown className="w-4 h-4 transform:  md:h-6 md:w-6 " />
              <p className="text-xs sm:text-md md:text-xl font-mono ">
                scroll down to learn what I do!
              </p>
            </span>
          </GridCell>

          <SectionHeading
            title="experience"
            rowStart={11}
            rowEnd={13}
            columnStart={2}
            columnEnd={6}
            color="purple-500"
          />

          {data.experience.map((exp, index) => (
            <ExperienceCard
              jobTitle={exp.jobTitle}
              companyName={exp.companyName}
              date={exp.date}
              skills={exp.skills}
              id={exp.id}
              rowStart={13 + 2 * index}
              rowEnd={15 + 2 * index}
            />
          ))}

          <SectionHeading
            title="skills"
            rowStart={20}
            rowEnd={22}
            columnStart={2}
            columnEnd={6}
            color="sky-500"
          />

          {
            // split the skills into array with 4 elements each and map over them
            data.skills
              .reduce((acc, _, i) => {
                if (i % 4 === 0) {
                  acc.push(data.skills.slice(i, i + 4));
                }
                return acc;
              }, [])
              .map((skills, index) => (
                <>
                  {
                    // should occupy 1 row and 4 columns
                    skills.map((skill, i) => (
                      <GridCell
                        rowStart={22 + index}
                        rowEnd={22 + index}
                        columnStart={2 + i * 4}
                        columnEnd={6 + i * 4}
                        className="justify-start pl-3"
                      >
                        <p className="text-xs sm:text-xl md:text-2xl font-mono">
                          {skill}
                        </p>
                      </GridCell>
                    ))
                  }
                </>
              ))
          }
          <SectionHeading
            title="projects"
            rowStart={26}
            rowEnd={28}
            columnStart={2}
            columnEnd={6}
            color="red-500"
          />
          {data.projects.map((project, index) => (
            <ProjectsCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              link={project.link}
              id={project.id}
              rowStart={28 + 4 * index}
              rowEnd={31 + 4 * index}
            />
          ))}
          <SectionHeading
            title="blogs"
            rowStart={37}
            rowEnd={39}
            columnStart={2}
            columnEnd={6}
            color="green-500"
          />

          {data.blogs.map((blog, index) => (
            <BlogCard
              id={blog.id}
              title={blog.title}
              link={blog.link}
              rowStart={39 + 2 * index}
              rowEnd={41 + 2 * index}
            />
          ))}
        </Grid>
      </div>
      {/* bottom right */}
      <div className="fixed z-10 bottom-10 w-full ">
        <DockDemo />
      </div>
    </div>
  );
}
