import TaskCard from "../ui/TaskCard";

type TaskListProps = {
  title: string;
};

export default function TaskList({ title }: TaskListProps) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-500" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      <div className="flex flex-col gap-5">
        <TaskCard />
      </div>
    </div>
  );
}
