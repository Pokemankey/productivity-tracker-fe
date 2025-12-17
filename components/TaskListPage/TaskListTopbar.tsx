"use client";

import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateTaskModal, { TaskFormData } from "../modals/CreateTaskModal";
import { createTaskAction } from "@/app/actions/task.actions";

export default function TaskListTopbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateTask = async (payload: TaskFormData) => {
    const newTask = await createTaskAction(payload);
    //TODO: Add successful completion logic. Add error handling
  };

  return (
    <>
      <div className="border-b border-gray-200 bg-white p-5 shadow-xs">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">Goals {">"} Goal Name</p>
            <h1 className="text-2xl font-bold">Goal Name</h1>
            <p className="text-sm text-gray-500">
              12 tasks · 6 completed · 4 in progress · 2 to do
            </p>
          </div>

          <div className="flex items-center">
            <Button size="sm" onClick={() => setIsModalOpen(true)}>
              <span className="flex items-center gap-2">
                <Plus size={18} className="" />
                <span>Add Tasks</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </>
  );
}
