"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import CreateGoalModal, { GoalFormData } from "../modals/CreateGoalModal";
import { createGoalAction } from "@/app/actions/goal.actions";

export default function NewGoalCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGoal = async (data: GoalFormData) => {
    await createGoalAction(data);
  };

  return (
    <>
      <div
        className="flex h-full cursor-pointer flex-col items-center justify-center gap-5 rounded-md border-2 border-dotted border-blue-300 bg-linear-to-br from-indigo-50 to-fuchsia-50 p-6 hover:shadow-md"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="rounded-lg bg-blue-100 p-2">
          <Plus size={24} className="text-blue-700" />
        </div>
        <p className="text-center text-lg font-semibold">Create New Goal</p>
        <p className="text-center text-gray-500">
          Start your journey towards a new achievement
        </p>
      </div>

      <CreateGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateGoal}
      />
    </>
  );
}
