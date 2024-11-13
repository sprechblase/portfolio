"use client";

import { MainDock } from "@/components/dock";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <MainDock />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
