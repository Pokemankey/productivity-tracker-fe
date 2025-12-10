export default function GoalDue() {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md border border-red-200 bg-red-50 p-3">
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
      <div className="flex flex-col">
        <p className="text-md">Product Launch</p>
        <p className="text-sm text-gray-500">Due in 3 days</p>
      </div>
    </div>
  );
}
