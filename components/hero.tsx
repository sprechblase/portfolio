import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import BlurFade from "./ui/blur-fade";
import Particles from "./ui/particles";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Spotlight } from "./ui/spotlight";

export function Hero() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#030303");
  }, [theme]);

  return (
    <section id="hero">
      <Spotlight className="-top-16 left-1/3" fill="white" />
      <div className="relative flex flex-col justify-center items-center mt-28 min-w-[80%] min-h-[40rem] px-6 text-center md:px-8">
        <Particles
          className="absolute inset-0"
          quantity={120}
          ease={80}
          color={color}
          refresh
        />
        <BlurFade delay={0.1 * 3} yOffset={-6} inView>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 dark:bg-neutral-950"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Based in Germany</span>
            </AnimatedShinyText>
          </div>
        </BlurFade>
        <BlurFade delay={0.1 * 2} yOffset={-6} inView>
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-foreground to-zinc-500 text-transparent bg-clip-text p-2">
            Web Development &
            <br className="block" />
            Creative protoyping
          </h1>
        </BlurFade>
        <BlurFade delay={0.1 * 3} yOffset={-6} inView>
          <p className="mt-6 text-md tracking-tight text-zinc-400 md:text-lg lg:text-xl">
            Hi, I'm Samuel, I develop creative prototypes to eventually release
            <br className="block" />
            visually stunning and highly functional web applications.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
