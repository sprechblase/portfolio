import { TechStackCard } from "./techstackcard";
import BlurFade from "./ui/blur-fade";
import WordFadeIn from "./ui/word-fade-in";

export function Skills() {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="skills">
      <div className="space-y-4 mb-10 flex gap-8">
        <BlurFade delay={0.1 * 2} yOffset={0} inView>
          <span className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
            Current Tech Stack
          </span>
        </BlurFade>
        <BlurFade delay={0.1 * 2} yOffset={0} inView>
          <span className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
            I'm all about using modern tools and tech that let me build really
            cool and useful stuff! Here are some of my go-to technologies I work
            with <u>the most</u>.
          </span>
        </BlurFade>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
        <BlurFade delay={0.1 * 2} yOffset={0} inView>
          <TechStackCard
            name="TypeScript"
            imageUrl="/img/typescript.svg"
            bgColor="bg-[#3178C6]/20"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 2.5} yOffset={0} inView>
          <TechStackCard
            name="HTML5"
            imageUrl="/img/html5.svg"
            bgColor="bg-[#e34f26]/20"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 3} yOffset={0} inView>
          <TechStackCard
            name="CSS3"
            imageUrl="/img/css3.svg"
            bgColor="bg-[#264de4]/20"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 3.5} yOffset={0} inView>
          <TechStackCard
            name="Tailwind CSS"
            imageUrl="/img/tailwind.svg"
            bgColor="bg-[#0EA5E9]/20"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 4} yOffset={0} inView>
          <TechStackCard
            name="React.js"
            imageUrl="/img/react.svg"
            bgColor="bg-[#61DAFB]/20"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 4.5} yOffset={0} inView>
          <TechStackCard
            name="Next.js"
            imageUrl="/img/nextjs.svg"
            bgColor="bg-dark-200/10 dark:bg-white/10"
          />
        </BlurFade>
        <BlurFade delay={0.1 * 5} yOffset={0} inView>
          <TechStackCard
            name="Git"
            imageUrl="/img/git.svg"
            bgColor="bg-[#F1502F]/20"
          />
        </BlurFade>
      </div>
    </div>
  );
}
