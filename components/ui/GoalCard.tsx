import { Calendar, Clock } from "lucide-react";

export interface Goal {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  priority: string;
  color: string;
  status: string;
  totalTasks: number;
  completedTasks: number;
  totalMinutes: number;
}

type GoalProps = {
  goal: Goal;
};

export default function GoalCard({ goal }: GoalProps) {
  const progressPercent =
    goal.totalTasks === 0
      ? "0"
      : Math.round((goal.completedTasks / goal.totalTasks) * 100).toString();

  function formatDueDate(dueDate?: string) {
    if (!dueDate) return "No due date";
    const date = new Date(dueDate);

    return (
      "Due " +
      date.toLocaleDateString(undefined, {
        month: "short",
      }) +
      " " +
      date.toLocaleDateString(undefined, {
        day: "numeric",
      })
    );
  }

  function getGradient(color: string) {
    const colorGradient: Record<string, string> = {
      indigo: "bg-linear-to-r from-indigo-600 to-purple-600",
      green: "bg-linear-to-r from-green-600 to-emerald-700",
      blue: "bg-linear-to-r from-blue-600 to-cyan-600",
      purple: "bg-linear-to-r from-purple-600 to-pink-600",
      pink: "bg-linear-to-r from-pink-600 to-rose-600",
      orange: "bg-linear-to-r from-orange-600 to-red-600",
    };

    return colorGradient[color];
  }

  function formatMinutes(totalMinutes: number) {
    if (totalMinutes <= 0) return "0m";

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;

    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="flex cursor-pointer flex-col gap-3 rounded-md border border-gray-300 bg-white p-6 hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-600"></div>
        <div className="flex items-center rounded-2xl bg-green-100 px-3 py-0.5">
          <span className="text-xs text-green-600">Active</span>
        </div>
      </div>

      <h1 className="text-xl font-semibold">{goal.title}</h1>
      <p className="line-clamp-2 min-h-10 text-sm text-gray-500">
        {goal.description || " "}
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm">Progress</p>
          <p className="text-sm text-gray-500">{`${goal.completedTasks}/${goal.totalTasks} tasks`}</p>
        </div>

        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className={`h-full w-[${progressPercent}%] rounded-full ${getGradient(goal.color)}`}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Calendar size={16} strokeWidth={2.5} />
          <p className="text-sm text-gray-500">{formatDueDate(goal.dueDate)}</p>
        </div>

        <div className="flex items-center gap-1">
          <Clock size={16} strokeWidth={2.5} />
          <p className="text-sm text-gray-500">
            {formatMinutes(goal.totalMinutes)} logged
          </p>
        </div>
      </div>
    </div>
  );
}
