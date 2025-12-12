"use client";

type SideBarProps = {
  user: {
    username: string;
    email: string;
  };
};

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  CheckSquare,
  Calendar,
  BarChart3,
  Ellipsis,
} from "lucide-react";
import { apiFetch } from "@/lib/api/client";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Goals", href: "/goals" },
  // { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  // { icon: Calendar, label: "Sessions", href: "/sessions" },
  // { icon: BarChart3, label: "Analytics", href: "/analytics" },
];

const recentGoals = [
  { id: 1, name: "Launch Product", color: "bg-emerald-500" },
  { id: 2, name: "Design System", color: "bg-blue-500" },
  { id: 3, name: "Marketing Campaign", color: "bg-purple-500" },
];

export default function SideBar({ user }: SideBarProps) {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await apiFetch("/auth/logout", { method: "POST" });
    } catch (err: any) {
      console.error(err);
    } finally {
      window.location.replace("/login");
    }
  };

  return (
    <div className="flex min-h-screen flex-col border-r border-gray-200 bg-white">
      <div className="flex h-full w-70 flex-col p-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FlowState logo" width={40} height={40} />
          <span className="bg-linear-to-br from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent">
            FlowState
          </span>
        </div>

        <div className="mt-5 -ml-6 w-70 border border-gray-200"></div>

        <nav className="mt-5 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-md flex items-center gap-3 rounded-lg py-2 font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="m-2 h-6 w-6" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex-1 pt-8">
          <h3 className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Recent Goals
          </h3>
          <div className="space-y-1">
            {recentGoals.map((goal) => (
              <a
                key={goal.id}
                href={`/goals/${goal.id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
              >
                <div className={`h-2 w-2 rounded-full ${goal.color}`}></div>
                {goal.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-5 -ml-6 w-70 border border-gray-200"></div>
        <div className="flex justify-between gap-2.5">
          <div className="flex gap-2.5">
            <Image
              src="/TheKnight.png"
              alt="Profile Picture"
              width={55}
              height={55}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p className="md:text-md font-semibold">
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </p>
              <p className="md:text-md text-gray-500">Free User</p>
            </div>
          </div>

          <button className="cursor-pointer" onClick={handleLogout}>
            <Ellipsis className="my-auto ml-3 h-8 w-8 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
