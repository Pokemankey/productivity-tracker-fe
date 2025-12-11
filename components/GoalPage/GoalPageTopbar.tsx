import { Plus } from "lucide-react";
import Button from "../ui/Button";

export default function GoalPageTopbar() {
  return (
    <div className="border-b border-gray-200 bg-white p-5 shadow-xs">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Goals</h1>
          <p className="text-sm text-gray-500">
            Manage and track your goals to success
          </p>
        </div>
        <div className="flex items-center">
          <Button size="sm">
            <span className="flex items-center gap-2">
              <Plus size={18} className="" />
              <span>New Goal</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
