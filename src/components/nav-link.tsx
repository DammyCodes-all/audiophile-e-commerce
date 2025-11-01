"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavlinkProps = {
  name: string;
  href: string;
  onClick?: () => void;
};
export const NavLink = ({ name, href, onClick }: NavlinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href || pathName.startsWith(href + "/");
  return (
    <Link
      onClick={onClick}
      href={href}
      className={` text-[13px]  capitalize font-bold transition-colors hover:text-theme-dark-orange duration-300 ${
        isActive ? "text-theme-dark-orange" : "text-theme-white"
      }`}
    >
      {name}
    </Link>
  );
};
