import GoalPageTopbar from "@/components/GoalPage/GoalPageTopbar";
import GoalsList from "@/components/GoalPage/GoalsList";
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
