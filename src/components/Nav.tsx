import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center py-6">
      <div className="flex space-x-8 text-[#EAF2FF]/90 uppercase tracking-wide font-medium">
        <Link
          href="/"
          className="relative transition-colors duration-200 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/tournaments"
          className="relative text-white font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white/50 after:opacity-100"
        >
          Tournaments
        </Link>
        <Link
          href="/staff"
          className="relative transition-all duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white/50 hover:after:w-full after:transition-all after:duration-200"
        >
          Staff
        </Link>
      </div>
    </nav>
  );
}