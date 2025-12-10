import GoalDue from "../ui/GoalDue";

export default function UpcomingDeadlines() {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-gray-300 bg-white p-6">
      <h1 className="text-lg font-semibold">Upcoming Deadlines</h1>
      <GoalDue />
      <GoalDue />
      <GoalDue />
    </div>
  );
}
