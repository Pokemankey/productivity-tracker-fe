import { Ellipsis } from "lucide-react";

export default function TaskCard() {
  return (
    <div className="flex cursor-pointer flex-col gap-5 rounded-md border border-l-4 border-gray-300 border-l-orange-500 bg-white p-5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-md font-semibold">Session Tracking Feature</h1>
        <Ellipsis size={16} className="text-gray-500" />
      </div>

      <p className="text-sm text-gray-500">
        Build time tracking system for work sessions
      </p>

      <div className="flex items-center gap-3">
        <div className="rounded-md bg-orange-100 px-2 py-1">
          <p className="text-sm text-orange-700">High</p>
        </div>
        <p className="text-sm text-gray-500">Dec 15</p>
      </div>
    </div>
  );
}
