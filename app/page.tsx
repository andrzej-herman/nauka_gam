"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="dark:bg-[#1F1F1F] flex flex-col">
      <div className="container mx-auto">
        <section
          id="banner"
          className="flex flex-col space-y-8 items-center pb-20"
        >
          <h1 className="font-bold text-2xl md:text-6xl text-neutral-800 dark:text-white text-center tracking-tight">
            Innowacyjna metoda nauki gam
          </h1>

              <Link href="/p1c4">
              <Button
                size="lg"
                className="py-8 md:py-0 text-base md:text-lg tracking-tight"
              >
                Rozpocznij ćwiczenia
              </Button>
              </Link>


        </section>
      </div>
    </div>
  );
}
