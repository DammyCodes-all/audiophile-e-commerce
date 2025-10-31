import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export const BigBtn = ({ text, color }: { text: string; color: string }) => {
  return (
    <Button
      className={`uppercase flex justify-center items-center rounded-none font-bold tracking-[1px] bg-theme-dark-orange hover:bg-theme-light-orange transition-colors duration-300 text-xs sm:text-sm cursor-pointer px-6 sm:px-8 py-3 sm:py-4 hover:border-theme-dark-orange hover:border-2 ${color}`}
    >
      {text}
    </Button>
  );
};

export const GhostBtn = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="hover:text-theme-dark-orange text-black/50 cursor-pointer transition-colors duration-300 flex justify-center items-center text-[13px] gap-1"
    >
      SHOP
      <span className="text-theme-dark-orange hover:text-theme-dark-orange bg-none">
        <ChevronRight className="size-4 font-bold" />
      </span>
    </Link>
  );
};
