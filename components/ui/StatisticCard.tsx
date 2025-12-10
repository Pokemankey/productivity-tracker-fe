import { Target } from "lucide-react";

export default function StatisticCard() {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-gray-300 bg-white p-5">
      <div className="flex justify-between">
        <div className="w-fit rounded-lg bg-indigo-100 p-3">
          <Target size={20} className="text-indigo-600" />
        </div>
        <div className="flex items-center">
          <p className="text-sm text-green-600">+12%</p>
        </div>
      </div>
      <p className="text-xl font-bold md:text-2xl">24</p>
      <p className="text-md text-gray-500">Active Goals</p>
    </div>
  );
}
