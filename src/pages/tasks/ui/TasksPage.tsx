import { PageHeader } from "@/shared/ui/pageHeader";
import { AddTaskAction } from "@/features/taskAdd";
import { fetchTasks } from "@/entities/task/api/tasksApi";
import { TaskDrawer } from "@/widgets/taskDrawer";
import { TaskList } from "@/widgets/taskList";

const tasks = fetchTasks();

export const TasksPage = () => {
  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList tasks={tasks} />
        <TaskList tasks={tasks} />
      </div>
      <TaskDrawer />
    </div>
  );
};
