import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/globe.svg";
import { projectsDone } from "../works";

export function Project() {
  return (
    <section id="projects" className="w-full">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F3F5F6] px-4 py-2">
          <span className="text-sm">✦</span>
          <span className="text-sm font-medium text-[#5B5A5C]">Projects</span>
        </div>

        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#141316] transition hover:bg-gray-100">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {projectsDone.map((project) => (
          <div
            key={project.name}
            className="rounded-[24px] border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                  <Image
                    src={avatar}
                    width={30}
                    height={30}
                    alt="Project Logo"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-[#141316]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm  w-65 text-[#5B5A5C]">
                    {project.description}
                  </p>
                </div>
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#141316] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2A2A2D]"
              >
                Check it
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
