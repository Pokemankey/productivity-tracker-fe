import GoalCard from "../ui/GoalCard";

export default function RecentGoals() {
  return (
    <div className="flex flex-2 flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="font-bold md:text-xl">Recent Goals</h1>
        <p className="cursor-pointer text-blue-700">View All</p>
      </div>
      <div className="no-scrollbar flex-1 overflow-y-auto">
        <div className="flex flex-col gap-5">
          <GoalCard />
          <GoalCard />
          <GoalCard />
          <GoalCard />
        </div>
      </div>
    </div>
  );
}
