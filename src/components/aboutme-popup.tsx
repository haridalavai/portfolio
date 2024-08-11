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
import rehypeRaw from "rehype-raw";

const markdownContent = `[<img src="https://haridalavai.me/me.jpg" width="250"/>](https://haridalavai.me/me.jpg)

## Hey 👋

I’m Hari. Thanks for checking out my portfolio. Officially, I’m Srihari, a software engineer with 3 years of experience. Most of the time, you can find me coding 💻, painting 🎨, playing games 🎮, cooking up a storm 🍳, reading anything from science fiction to shampoo bottles 📚, binge-watching anime 📺, overthinking everything 🤔, or sometimes going on treks—because who doesn't love getting their legs hurt for fun? 🥾

If you like science fiction, fantasy, or anime, we’re destined to be friends! I’m always dreaming up problems and solutions, or figuring out how to make good solutions even better. My latest brainchild is Xcopilot—imagine Siri, but for SaaS products. It lets users chat with the product and magically turns their queries into actionable tasks.

**Goals for 2024:**

* [ ] Collaborate with a team of talented product engineers. Joining a team working on customer service | marketing products would be amazing!
* [ ] ~Launch Xcopilot~ Open source XCopilot
* [x] ~Learn to play the guitar~
* [ ] Write more blog posts
* [ ] Trip to Andaman and Nicobar Islands
* [ ] If possible, start livestreaming on Twitch to share progress on my projects.

🚀 So, if you’re ready for some tech wizardry, let’s connect!
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
            ),
          )}
        </Marquee>
      </DialogTrigger>
      <DialogContent className=" fixed top-0 w-full h-screen pt-16 overflow-auto">
        <div className="border dark:border-neutral-700  px-4 ">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className="prose dark:prose-invert"
          >
            {markdownContent}
          </Markdown>
        </div>
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
