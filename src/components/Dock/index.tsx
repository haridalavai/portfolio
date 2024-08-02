"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "../icons";
import ModeToggle from "../mode-toggle";

const DATA = {
  navbar: [
    { href: "#", icon: Icons.home, label: "Home" },
    // { href: "https://medium.com/@neon._.builds", icon: Icons.pencil, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/haridalavai",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sriharidalavai/",
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/dalavai_hari",
        icon: Icons.x,
      },
      blog: {
        name: "Blog",
        url: "https://medium.com/@neon._.builds",
        icon: Icons.pencil,
      },
      email: {
        name: "Send Email",
        url: "mailto:dalavai.hari@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export function DockDemo() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
