import SideBar from "@/components/layout/SideBar";
import type { ReactNode } from "react";
import { getCurrentUser } from "@/lib/auth/auth";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="flex">
      <SideBar user={user} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
