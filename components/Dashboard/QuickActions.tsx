import { BarChart3, Plus } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="rounded-md border border-gray-300 bg-white p-5">
      <h1 className="text-lg font-semibold">Quick Actions</h1>
      <div className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-gray-100">
        <div className="rounded-lg bg-blue-100 p-2">
          <Plus size={24} className="text-blue-700" />
        </div>
        <p className="text-md">Create New Goal</p>
      </div>
      <div className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-gray-100">
        <div className="rounded-lg bg-purple-100 p-2">
          <BarChart3 size={24} className="text-purple-700" />
        </div>
        <p className="text-md font-semi">View Analytics</p>
      </div>
    </div>
  );
}
