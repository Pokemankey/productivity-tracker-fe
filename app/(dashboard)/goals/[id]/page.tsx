import TaskList from "@/components/TaskListPage/TaskList";
import TaskListTopbar from "@/components/TaskListPage/TaskListTopbar";

export default async function TaskListPage() {
  return (
    <div className="flex h-screen flex-col">
      <TaskListTopbar />
      <div className="flex gap-5 p-5">
        <TaskList title="To Do" />
        <TaskList title="In Progress" />
        <TaskList title="Completed" />
      </div>
    </div>
  );
}
