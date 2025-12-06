import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 px-4">
      {children}
    </div>
  );
}
