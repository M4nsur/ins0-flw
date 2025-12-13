import {}

export const prepareTaskForEdit = (task: TaskFormTypes): TaskFormTypes => ({
  title: task.title,
  description: task.description ?? undefined,
  category: task.category ?? undefined,
  priority: task.priority,
  status: task.status,
  pomodoro: task.pomodoro ?? undefined,
  dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
});
