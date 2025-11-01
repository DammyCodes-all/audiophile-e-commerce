import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="relative isolate min-h-[70dvh] w-full bg-theme-dark text-theme-white overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-80 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-theme-dark-orange/40 blur-[160px]" />
        <div className="absolute right-[-180px] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-theme-dark-orange/30 blur-[120px]" />
        <div className="absolute inset-x-6 inset-y-12 rounded-3xl border border-white/5" />
      </div>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <span className="tracking-[0.8em] text-2xl font-semibold uppercase text-theme-white/60">
          404
        </span>
        <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-[2px] sm:text-4xl md:text-[52px]">
          Lost in the soundscape
        </h1>
        <p className="text-sm leading-6 text-theme-white/70 sm:text-base sm:leading-7 md:max-w-2xl">
          We couldn&apos;t find the page you&apos;re looking for. Let&apos;s get
          you back to the latest gear, curated setups, and everything else
          audiophile.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/">
            <Button className="rounded-none bg-theme-dark-orange px-8 py-3 text-xs font-bold tracking-[1px] uppercase transition-colors duration-300 hover:bg-theme-light-orange">
              Back to home
            </Button>
          </Link>
          <Link
            href="/headphones"
            className="text-theme-white/70 transition-colors duration-300 hover:text-theme-light-gray"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
