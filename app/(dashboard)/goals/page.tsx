import GoalPageTopbar from "@/components/GoalPage/GoalPageTopbar";
import GoalCard from "@/components/ui/GoalCard";
import NewGoalCard from "@/components/ui/NewGoalCard";

export default function GoalPage() {
  return (
    <div className="flex h-screen flex-col">
      <GoalPageTopbar />
      <div className="no-scrollbar grid auto-rows-fr gap-5 overflow-y-auto p-5 sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <NewGoalCard />
      </div>
    </div>
  );
}
