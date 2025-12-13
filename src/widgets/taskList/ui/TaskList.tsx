// widgets/task-list/ui/TaskList.tsx
import type { TaskCardType } from "@/entities/task";
import { TaskCard } from "@/entities/task/ui/TaskCard";
import { DeleteTaskButton } from "@/features/taskDelete";

import { OpenEditTaskDrawerButton } from "@/features/taskEdit";

interface TaskListProps {
  tasks: TaskCardType[];
  variant?: "active" | "completed";
}

export const TaskList = ({ tasks, variant = "active" }: TaskListProps) => {
  const filteredTasks =
    variant === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  const title = variant === "active" ? "Upcoming tasks" : "Completed task";

  return (
    <section className={variant === "completed" ? "mt-10" : ""}>
      {title && <h2 className="mb-4 font-bold text-lg lg:text-2xl">{title}</h2>}
      <div className="flex flex-wrap gap-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            actions={
              <>
                <OpenEditTaskDrawerButton task={task} />

                <DeleteTaskButton taskId={task.id} />
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};
{
  /* <DeleteTaskButton
  taskId={task.id}
  variant="text"
  onDeleteSuccess={closeDrawer}
/>; */
}
