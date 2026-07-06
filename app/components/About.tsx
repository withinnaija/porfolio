"use client";

import Image from "next/image";
import { toast } from "sonner";
import avatar from "../../public/avatar.png";

export default function About() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("adebayoblessing61@gmail.com");
      toast.success("Email copied successfully!");
    } catch {
      toast.error("Unable to copy email");
    }
  };

  return (
    <section id="/home" className="mt-4 w-full">
      <div className="flex flex-col gap-4 rounded-[24px] bg-gray-100 p-4 shadow-sm">
        <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F3F5F6] px-4 py-2">
            <span className="text-sm">✦</span>
            <span className="text-sm font-medium text-[#5B5A5C]">
              Software Developer
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EDF8F1] px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3CB371]" />
            <span className="text-sm font-medium text-[#3CB371]">
              Available to Work
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-4 px-1 sm:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="text-xl font-bold text-[#2D3748]">
              I&apos;m Adebayo Blessing
            </h1>
            <p className="text-sm text-[#5B5A5C]">
              I build thoughtful web experiences with modern tools and a strong
              eye for detail.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex items-center gap-2 rounded-lg bg-[#141316] px-3 py-2 text-[12px] font-medium text-white transition hover:bg-gray-800">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                <span>Hire me</span>
              </button>

              <button
                onClick={copyEmail}
                className="rounded-lg bg-[#F3F5F6] px-3 py-2 text-sm font-medium text-[#141316] transition hover:bg-[#ECEFF1]"
              >
                Copy mail
              </button>
            </div>
          </div>

          <div className="flex flex-1 justify-center">
            <Image
              src={avatar}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
