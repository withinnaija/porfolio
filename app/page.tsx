import Image from "next/image";
import { Hero } from "./components/Hero";
import About from "./components/About";
import { Project } from "./components/Project";
import { HireMe } from "./components/HireMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300 px-4 py-4">
      <div className="mx-auto flex w-full max-w-[500px] flex-col gap-4">
        <Hero />
        <About />
        <Project />
        <HireMe />
      </div>
    </main>
  );
}
