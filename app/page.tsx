"use client";

import { MainDock } from "@/components/dock";
import BlurFade from "@/components/ui/blur-fade";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#030303");
  }, [theme]);

  return (
    <main className="mx-auto flex-1">
      <section
        id="hero"
        className="relative flex flex-col justify-center items-center mx-auto mt-20 max-w-[90rem] min-h-[45rem] px-6 text-center md:px-8"
      >
        <Particles
          className="absolute inset-0"
          quantity={120}
          ease={80}
          color="#fff"
          refresh
        />
        <BlurFade delay={0.1 * 2} yOffset={-6} inView>
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-foreground to-zinc-500 text-transparent bg-clip-text p-2">
            Web Development &
            <br className="block" />
            Creative protoyping
          </h1>
        </BlurFade>
        <BlurFade delay={0.1 * 3} yOffset={-6} inView>
          <p className="mt-6 text-lg tracking-tight text-zinc-400 md:text-xl">
            Hi, I'm Samuel, I create creative prototypes to eventually release
            <br className="block" />
            visually stunning and highly functional web applications.
          </p>
        </BlurFade>
      </section>
      <BlurFade delay={0.1 * 3} yOffset={3} inView>
      <MainDock />
      </BlurFade>
    </main>
  );
}
