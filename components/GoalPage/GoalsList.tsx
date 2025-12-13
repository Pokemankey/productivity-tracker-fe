import GoalCard, { Goal } from "../ui/GoalCard";
import NewGoalCard from "../ui/NewGoalCard";

type GoalsListProps = {
  goals: Goal[];
};

export default function GoalsList({ goals }: GoalsListProps) {
  return (
    <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto p-5">
      <div className="grid auto-rows-fr gap-5 sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
        <NewGoalCard />
      </div>
    </div>
  );
}
