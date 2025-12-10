import DashboardTopbar from "@/components/Dashboard/DashboardTopbar";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecentGoals from "@/components/Dashboard/RecentGoals";
import Statistics from "@/components/Dashboard/Statistics";
import UpcomingDeadlines from "@/components/Dashboard/UpcomingDeadlines";

export default function DashboardPage() {
  return (
    <div className="flex h-screen flex-col">
      <DashboardTopbar />
      <Statistics />

      <div className="flex gap-10 overflow-hidden p-5">
        <RecentGoals />
        <div className="flex flex-1 flex-col gap-8">
          <UpcomingDeadlines />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
