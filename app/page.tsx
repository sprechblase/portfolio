"use client";

import { MacOSWindow } from "@/components/macOSFrame";
import { Earth, FolderGit, Github, Mail, Twitter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import Timeline from "@/components/Timeline";
/* import { Experiences } from "@/components/Experiences"; */

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <MacOSWindow title="skre/dev Portfolio" className="w-full max-w-4xl">
        <h1 className="title text-5xl">hi i&apos;m samuel</h1>
        <p className="mt-4 font-light">
          {new Date().getFullYear() -
            2005 -
            (new Date() < new Date(new Date().getFullYear(), 11, 22) ? 1 : 0)}
          -year-old soon-to-be computer science student from Germany 🇩🇪
        </p>
        <div className="flex gap-6 pt-4 pb-4">
          <a
            href="https://x.com/skredev"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter aria-hidden="true" className="size-5" />
          </a>
          <a
            href="https://github.com/sprechblase"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github aria-hidden="true" className="size-5" />
          </a>
          <a
            href="mailto:hi@skre.dev"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail aria-hidden="true" className="size-5" />
          </a>
        </div>

        {/* <Experiences /> */}

        <TechStack />

        <Projects />
      </MacOSWindow>
    </section>
  );
}
