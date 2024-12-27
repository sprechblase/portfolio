import Image from "next/image";

interface TechStackCardProps {
  name: string;
  imageUrl: string;
  bgColor: string;
}

export function TechStackCard({ name, imageUrl, bgColor }: TechStackCardProps) {
  return (
    <div className="flex flex-1 gap-5 p-3 rounded-lg border bg-card">
      <div className={`p-3 ${bgColor} rounded-lg w-fit`}>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={`${name} logo`}
          className={"size-6"}
        />
      </div>
      <div>
        <h4 className="py-3 text-md font-medium">{name}</h4>
      </div>
    </div>
  );
}
