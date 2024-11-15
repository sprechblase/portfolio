"use client";

import { MainDock } from "@/components/dock";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-8xl mx-auto w-full">
        <MainDock />
        <Hero />
        <div className="mt-28 max-w-6xl mx-auto w-full">
          <Skills />
        </div>
        <div className="mt-28 max-w-6xl mx-auto w-full">
          <Projects />
        </div>
        <div className="mt-28 max-w-7xl mx-auto w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
