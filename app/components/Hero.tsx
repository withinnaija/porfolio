import { House, User, FolderOpen, Mail } from "lucide-react";
import Link from "next/link";
export function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="mx-1 flex items-center justify-between gap-4 rounded-xl bg-gray-100 p-2 sm:mx-0">
        <nav className="flex items-center gap-4">
          <Link href="/" aria-label="Home">
            <House className="h-4 w-4" />
          </Link>
          <Link href="/" aria-label="About">
            <User className="h-4 w-4" />
          </Link>
          <Link href="/" aria-label="Projects">
            <FolderOpen className="h-4 w-4" />
          </Link>
          <Link href="/" aria-label="Contact">
            <Mail className="h-4 w-4" />
          </Link>
        </nav>
        <button className="rounded-md bg-blue-500 px-2 py-2 text-[12px] text-white transition hover:bg-blue-600">
          Hire me
        </button>
      </div>
    </section>
  );
}
