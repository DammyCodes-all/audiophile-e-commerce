"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type GoBackProps = {
  fallback?: string;
};

export default function GoBackButton({ fallback = "/" }: GoBackProps) {
  const router = useRouter();

  function handleBack() {
    // router.back() will go to previous entry in history; if none, navigate to fallback
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  }

  return (
    <Button
      onClick={handleBack}
      variant={"ghost"}
      className="text-theme-black/50 cursor-pointer"
    >
      Go Back
    </Button>
  );
}
