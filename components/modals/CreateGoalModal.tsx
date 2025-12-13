import { Target, X } from "lucide-react";
import Button from "../ui/Button";
import { useState } from "react";

interface CreateGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: GoalFormData) => void;
}

export interface GoalFormData {
  title: string;
  description?: string;
  dueDate?: string;
  priority: string;
  color: string;
}

export default function CreateGoalModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateGoalModalProps) {
  const [formData, setFormData] = useState<GoalFormData>({
    title: "",
    description: "",
    dueDate: "",
    priority: "MEDIUM",
    color: "indigo",
  });

  const handleSubmit = () => {
    if (formData.title.trim()) {
      const payload = {
        ...formData,
        dueDate: formData.dueDate
          ? new Date(formData.dueDate).toISOString()
          : undefined,
        priority: formData.priority.toLocaleUpperCase(),
      };

      onSubmit(payload);

      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "MEDIUM",
        color: "indigo",
      });
      onClose();
    }
  };

  const colorOptions = [
    { name: "indigo", class: "bg-indigo-500" },
    { name: "green", class: "bg-green-500" },
    { name: "blue", class: "bg-blue-500" },
    { name: "purple", class: "bg-purple-500" },
    { name: "pink", class: "bg-pink-500" },
    { name: "orange", class: "bg-orange-500" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl rounded-lg bg-white p-6">
        <div className="flex flex-col gap-6">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-linear-to-br from-indigo-700 to-fuchsia-600 p-3">
                <Target size={26} className="text-white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">Create New Goal</h1>
                <p className="text-md text-gray-500">
                  Define your next achievement
                </p>
              </div>
            </div>
            <div>
              <X
                size={26}
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={onClose}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-gray-900">
              Goal Title
            </label>
            <input
              placeholder="e.g., Launch Mobile App"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="rounded-lg border border-blue-200/80 p-2.5 placeholder:text-gray-400 focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-gray-900">
              Description <span className="text-gray-500">(Optional)</span>
            </label>
            <textarea
              placeholder="Describe your goal and what you want to achieve..."
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="resize-none rounded-lg border border-blue-200/80 p-2.5 placeholder:text-gray-400 focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Due Date <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) =>
                  setFormData({ ...formData, dueDate: e.target.value })
                }
                className="cursor-pointer rounded-lg border border-blue-200/80 p-2.5 text-gray-900 focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="cursor-pointer appearance-none rounded-lg border border-blue-200/80 bg-white p-2.5 text-gray-900 focus:border-2 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-gray-900">
              Goal Color
            </label>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, color: color.name })
                  }
                  className={`h-10 w-10 cursor-pointer rounded-lg ${color.class} transition-all hover:ring-2 hover:ring-${color.name}-500 hover:ring-offset-2 ${
                    formData.color === color.name
                      ? `ring-2 ring-${color.name}-500 ring-offset-2`
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="my-2 h-0 border border-gray-100" />

          <div className="flex items-center justify-between">
            <div className="p-3">
              <p
                className="cursor-pointer text-gray-500 transition hover:text-black"
                onClick={onClose}
              >
                Cancel
              </p>
            </div>
            <Button onClick={handleSubmit}>Create Goal</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
