"use client";

import { Plus } from "lucide-react";
import Button from "../ui/Button";
import CreateGoalModal, { GoalFormData } from "../modals/CreateGoalModal";
import { useState } from "react";
import { createGoalAction } from "@/app/actions/goal.actions";

export default function GoalPageTopbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGoal = async (data: GoalFormData) => {
    const newGoal = await createGoalAction(data);
    //TODO: Add successful completion logic. Add error handling
  };

  return (
    <>
      <div className="border-b border-gray-200 bg-white p-5 shadow-xs">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Goals</h1>
            <p className="text-sm text-gray-500">
              Manage and track your goals to success
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
