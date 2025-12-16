"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FlowState logo" width={40} height={40} />
          <span className="bg-linear-to-br from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent">
            FlowState
          </span>
        </div>

        <div className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <a href="#features" className="transition hover:text-black">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-black">
            How It Works
          </a>
          <a href="#" className="transition hover:text-black">
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-4 font-medium text-gray-700 md:flex">
          <a href="/login" className="transition hover:text-black">
            Login
          </a>
          <Button onClick={() => router.push("/register")}>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
