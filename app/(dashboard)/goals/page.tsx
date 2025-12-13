import GoalPageTopbar from "@/components/GoalPage/GoalPageTopbar";
import GoalsList from "@/components/GoalPage/GoalsList";
import GoalCard from "@/components/ui/GoalCard";
import NewGoalCard from "@/components/ui/NewGoalCard";
import { fetchGoals } from "@/lib/api/goals/goals.api";

export default async function GoalPage() {
  const goals = await fetchGoals();

  return (
    <div className="flex h-screen flex-col">
      <GoalPageTopbar />
      <GoalsList goals={goals} />
    </div>
  );
}
