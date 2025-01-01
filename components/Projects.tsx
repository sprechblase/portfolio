import { Earth, FolderGit } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
  return (
    <section className="pt-8">
      <h1 className="title text-3xl pb-6">my projects</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card className="max-w-[300px] flex flex-col">
          <CardHeader>
            <Link href="https://docsframe.work">
              <Image
                src="/img/docsframe.png"
                alt=""
                quality={90}
                width={500}
                height={300}
                className="h-36 w-full object-cover object-top border rounded-sm"
              />
            </Link>
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="font-serif pb-1">Docsframe</CardTitle>
            <CardDescription>
              The easiest documentation framework for your Next.js app.
              Customizable. Open Source.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">TailwindCSS</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">npm</Badge>
              <Badge variant="secondary">MDX</Badge>
            </div>
            <div className="flex gap-2 w-full">
              <Link href="https://docsframe.work" className="flex-1">
                <Button size="sm" className="w-full">
                  <Earth className="mr-2" />
                  Website
                </Button>
              </Link>
              <Link
                href="https://github.com/skredev/docsframe"
                className="flex-1"
              >
                <Button size="sm" className="w-full">
                  <FolderGit className="mr-2" />
                  Source
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Card className="max-w-[300px] flex flex-col">
          <CardHeader>
            <Link href="https://reviewificator.skre.dev">
              <Image
                src="/img/reviewificator.png"
                alt=""
                quality={90}
                width={500}
                height={300}
                className="h-36 w-full object-cover object-top border rounded-sm"
              />
            </Link>
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="font-serif pb-1">Reviewificator</CardTitle>
            <CardDescription>
              A simple checklist template that creates easily readable reviews
              to post on any video game review page
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">JavaScript</Badge>
            </div>
            <div className="flex gap-2 w-full justify-end">
              <Link href="https://reviewificator.skre.dev" className="flex-1">
                <Button size="sm" className="w-full">
                  <Earth className="mr-2" />
                  Website
                </Button>
              </Link>
              <Link
                href="https://github.com/skredev/reviewificator"
                className="flex-1"
              >
                <Button size="sm" className="w-full">
                  <FolderGit className="mr-2" />
                  Source
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
