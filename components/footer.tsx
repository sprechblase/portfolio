import Link from "next/link";
import { BorderBeam } from "./ui/border-beam";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BlurFade from "./ui/blur-fade";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

export function Footer() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#fff" : "#030303");
  }, [theme]);

  return (
    <BlurFade delay={0.1 * 4} yOffset={0} inView>
      <div
        className="flex flex-col justify-center antialiased overflow-hidden relative border border-dark-300 rounded-xl mb-5 min-w-[70rem] z-50"
        id="footer"
      >
        <div className="space-y-8 p-10">
          <h1 className="text-4xl font-bold max-w-2xl leading-[110%] relative z-10">
            Like what you see? Contact me{" "}
            <Link
              href="mailto:hi@skre.dev"
              className="text-primary hover:text-primary/80 border-b-2 border-primary hover:border-primary/80 transition-colors duration-200"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h1>
        </div>

        <div className="mt-16 p-8 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="space-y-2">
            <h3 className="text-lg font-bold relative z-10">Samuel Krebs</h3>
            <p className="text-md text-dark-200/70 dark:text-stone-200/70 relative z-10">
              &copy; 2024 | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <ul className="space-y-2 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Projects</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link
                  href="https://github.com/skredev/docsframe"
                  target="_blank"
                >
                  Docsframe
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link
                  href="https://www.linkedin.com/in/samuelkrebs/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="https://github.com/skredev" target="_blank">
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <BorderBeam
          size={250}
          duration={20}
          delay={15}
          colorFrom={color}
          colorTo={color}
        />
        <DotPattern
          width={30}
          height={30}
          cx={20}
          cy={20}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,grey,transparent,transparent)] "
          )}
        />
      </div>
    </BlurFade>
  );
}
