import React from "react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Marquee from "./magicui/marquee";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
Hey! Thanks for checking out my website. 
I'm srihari, most of the time you can find me coding or painting or playing games or cooking or reading or watching anime or overthinking or sometimes go on treks, out of pure motivation and get my legs hurt very badly . If you like 
science fiction, fantasy, or anime, we can be friends.
I constantly think about problems and possible solutions or how to improve existing solutions. 
`;

const AboutMePopup = () => {
  const [isAboutMeOpen, setIsAboutMeOpen] = React.useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Marquee pauseOnHover horizontal className="[--duration:5s]">
          {["developer 😎", "designer 🤪", "artist 🤩", "gamer 👾"].map(
            (word) => (
              <span className="text-3xl  sm:text-4xl md:text-6xl font-bold text-black dark:text-white">
                {word}
              </span>
            )
          )}
        </Marquee>
      </DialogTrigger>
      <DialogContent className=" fixed top-0 w-full h-screen pt-16">
        <DialogHeader className="border border-gray-500 p-3">
          <DialogTitle>About Me</DialogTitle>
        </DialogHeader>
        <p className="border border-gray-500 border-t-0 p-3">
          Content goes here
          <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
        </p>
        <DialogFooter className="sm:justify-start mt-3">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMePopup;
