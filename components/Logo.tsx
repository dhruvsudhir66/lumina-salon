import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo({
  light = false,
}: {
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Lumina Salon home"
    >
      <span
        className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-300 ${
          light
            ? "bg-white/10 text-[#d8bd8d]"
            : "bg-[#f1e9dc] text-[#92774d] group-hover:bg-[#e7dcc9]"
        }`}
      >
        <Sparkles size={20} />
      </span>

      <span>
        <span
          className={`block font-serif text-[21px] leading-none tracking-wide ${
            light
              ? "text-white"
              : "text-[#211a1b]"
          }`}
        >
          Lumina
        </span>

        <span
          className={`mt-1 block text-[8px] font-semibold tracking-[.28em] ${
            light
              ? "text-white/55"
              : "text-[#766b69]"
          }`}
        >
          SALON & BEAUTY
        </span>
      </span>
    </Link>
  );
}