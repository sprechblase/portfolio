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
import { ThemeToggle } from "@/components/theme-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  House,
  GithubLogo,
  XLogo,
  ProjectorScreen,
} from "@phosphor-icons/react";
import BlurFade from "./ui/blur-fade";

export function MainDock() {
  return (
    <section id="dock" className="fixed left-1/2 transform -translate-x-1/2">
      <BlurFade delay={0.1 * 3} yOffset={-6} inView>
        <TooltipProvider>
          <Dock direction="middle" className="bg-background">
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://skre.dev"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <House className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#projects"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <ProjectorScreen className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Projects</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://github.com/skredev"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <GithubLogo className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://x.com/skredev"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <XLogo className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>X (Twitter)</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ThemeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </BlurFade>
    </section>
  );
}
