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
    <BlurFade delay={0.1 * 6} yOffset={0} inView>
      <div
        className="flex flex-col justify-center antialiased overflow-hidden relative border border-dark-300 rounded-xl mb-5 z-50"
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

        <div className="p-8 pt-6 flex flex-col md:flex-row justify-end gap-8 md:gap-0">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold relative z-10">
              Samuel <br /> Krebs.
            </h3>
            <p className="text-md text-dark-200/70 dark:text-stone-200/70 relative z-10">
              &copy; 2024 | All rights reserved
            </p>
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
