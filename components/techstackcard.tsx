import Image from "next/image";
import { FC } from "react";

interface TechStackCardProp {
  name: string;
  imageUrl: string;
  bgColor: string;
}

export const TechStackCard: FC<TechStackCardProp> = ({
  name,
  imageUrl,
  bgColor,
}) => {
  return (
    <div className="flex flex-1 gap-5 p-3 rounded-xl border border-[#FAFAFA] bg-[#FAFAFA] hover:bg-[#F2F2F2] dark:border-[#1a1a1a] dark:bg-[#0b0b0c] dark:hover:bg-[#0e0e0f] transition-colors duration-200">
      <div className={`p-3 ${bgColor} rounded-xl w-fit`}>
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={"size-8"}
        />
      </div>
      <div>
        <h4 className="py-3 text-lg font-medium">{name}</h4>
      </div>
    </div>
  );
};
