import DashboardTopbar from "@/components/Dashboard/DashboardTopbar";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecentGoals from "@/components/Dashboard/RecentGoals";
import Statistics from "@/components/Dashboard/Statistics";
import UpcomingDeadlines from "@/components/Dashboard/UpcomingDeadlines";

import { getCurrentUser } from "@/lib/api/auth/auth";
import { fetchGoals } from "@/lib/api/goals/goals.api";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const goals = await fetchGoals();

  return (
    <div className="flex h-screen flex-col">
      <DashboardTopbar user={user} />
      <Statistics />

      <div className="flex gap-10 overflow-hidden p-5">
        <RecentGoals goals={goals} />
        <div className="flex flex-1 flex-col gap-8">
          <UpcomingDeadlines />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
