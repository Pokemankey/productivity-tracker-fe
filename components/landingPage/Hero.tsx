"use client";

import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="w-full bg-[#EEF2FF] py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-10 md:flex-row md:items-center">
        <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start">
          <div className="w-fit rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-700">
            AI-Powered Productivity
          </div>

          <h1 className="text-center text-4xl leading-tight font-extrabold text-black md:max-w-lg md:text-left md:text-4xl lg:text-5xl">
            Achieve Your Goals <br />
            with{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Smart Planning
            </span>
          </h1>

          <p className="max-w-md text-center text-base leading-relaxed text-gray-600/90 md:max-w-lg md:text-left md:text-lg">
            Set goals, break them into tasks, track your sessions, and let AI
            guide your path to success. All in one workspace.
          </p>

          <div className="flex w-full justify-center md:max-w-lg">
            <Button size="lg">Get Started</Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
          <Image
            src="/LandingPageCard.png"
            alt="Goal Card"
            className="w-full max-w-md md:max-w-none"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </section>
  );
}
