"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log("Google login");
  };

  const handleGitHubLogin = () => {
    // Handle GitHub login
    console.log("GitHub login");
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Welcome Back
        </h1>
        <p className="mt-2 text-sm font-medium text-gray-600">
          Log in to continue your journey to success
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          title="Email Address"
          type="email"
          icon="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          title="Password"
          type="password"
          icon="lock"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-0"
            />
            <span className="ml-2 cursor-pointer text-sm text-gray-700">
              Remember me
            </span>
          </label>
          <a
            href="#forgot"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 py-3 font-semibold text-white shadow-md transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
        >
          Log In
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-4 text-sm text-gray-500">Or continue with</span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleGoogleLogin}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
        >
          <Image src="/google.svg" alt="Google Icon" width={24} height={24} />
          Google
        </button>

        <button
          onClick={handleGitHubLogin}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
        >
          <Image src="/github.svg" alt="Github Icon" width={24} height={24} />
          GitHub
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
