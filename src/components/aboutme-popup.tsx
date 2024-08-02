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
![Hari](https://haridalavai.me/me.jpg) 
Hey! I’m Hari. Thanks for checking out my portfolio. I’m Srihari, a software engineer with 3 years of experience. Most of the time, you can find me coding 💻, painting 🎨, playing games 🎮, cooking up a storm 🍳, reading like a bookworm 📚, binge-watching anime 📺, overthinking everything 🤔, or sometimes going on treks because I thought it was a good idea—until my legs remind me otherwise 🥲.

If you like science fiction, fantasy, or anime, we’re destined to be friends! I’m always dreaming up problems and solutions, or figuring out how to make good solutions even better. My latest brainchild is Xcopilot—imagine Siri, but for SaaS products. It lets users chat with the product and magically turns their queries into actionable tasks. 🚀 So, if you’re ready for some tech wizardry, let’s connect!`;

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
