"use client";

import { Plus } from "lucide-react";
import Button from "../ui/Button";
import CreateGoalModal from "../modals/CreateGoalModal";
import { useState } from "react";

export default function DashboardTopbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGoal = () => {};

  return (
    <>
      <div className="border-b border-gray-200 bg-white p-5 shadow-xs">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Welcome back, Poke!</h1>
            <p className="text-sm text-gray-500">
              Here's what's happening with your goals today
            </p>
          </div>
          <div className="flex items-center">
            <Button size="sm" onClick={() => setIsModalOpen(true)}>
              <span className="flex items-center gap-2">
                <Plus size={18} className="" />
                <span>New Goal</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      <CreateGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateGoal}
      />
    </>
  );
}
