import { TechStackCard } from "./TechStackCard";

export function TechStack() {
  return (
    <section className="pt-10">
      <h1 className="title text-3xl pb-6">current tech-stack</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4">
        <TechStackCard
          name="TypeScript"
          imageUrl="/img/typescript.svg"
          bgColor="bg-[#3178C6]/20"
        />
        <TechStackCard
          name="HTML5"
          imageUrl="/img/html5.svg"
          bgColor="bg-[#e34f26]/20"
        />
        <TechStackCard
          name="CSS3"
          imageUrl="/img/css3.svg"
          bgColor="bg-[#264de4]/20"
        />
        <TechStackCard
          name="Tailwind CSS"
          imageUrl="/img/tailwind.svg"
          bgColor="bg-[#0EA5E9]/20"
        />
        <TechStackCard
          name="React.js"
          imageUrl="/img/react.svg"
          bgColor="bg-[#61DAFB]/20"
        />
        <TechStackCard
          name="Next.js"
          imageUrl="/img/nextjs.svg"
          bgColor="bg-dark-200/10 dark:bg-white/10"
        />
      </div>
    </section>
  );
}
