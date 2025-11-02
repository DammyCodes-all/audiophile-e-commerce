import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryFromSlug(slug: string): string {
  const lowerSlug = slug.toLowerCase();

  if (lowerSlug.includes("headphone")) {
    return "/headphones";
  }
  if (lowerSlug.includes("earphone")) {
    return "/earphones";
  }
  if (lowerSlug.includes("speaker")) {
    return "/speakers";
  }

  return "/";
}
