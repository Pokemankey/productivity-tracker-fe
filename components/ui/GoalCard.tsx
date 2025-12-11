import { Calendar, Clock } from "lucide-react";

export default function GoalCard() {
  return (
    <div className="flex h-full cursor-pointer flex-col gap-5 rounded-md border border-gray-300 bg-white p-6 hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-600"></div>
        <div className="flex items-center rounded-2xl bg-green-100 px-3 py-0.5">
          <span className="text-xs text-green-600">Active</span>
        </div>
      </div>

      <h1 className="text-xl font-semibold">Launch Product</h1>
      <p className="text-sm text-gray-500">
        Complete product development and launch to market
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm">Progress</p>
          <p className="text-sm text-gray-500">8/12 tasks</p>
        </div>

        <div className="h-2 w-full rounded-full bg-gray-200">
          <div className="h-full w-[66%] rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Calendar size={16} strokeWidth={2.5} />
          <p className="text-sm text-gray-500">Due Jan 10</p>
        </div>

        <div className="flex items-center gap-1">
          <Clock size={16} strokeWidth={2.5} />
          <p className="text-sm text-gray-500">2h 34m logged</p>
        </div>
      </div>
    </div>
  );
}
