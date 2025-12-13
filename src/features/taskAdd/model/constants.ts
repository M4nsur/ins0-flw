import { type TaskFormTypes } from "@/entities/task";

export const PRIORITY_OPTIONS = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "In_progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export const CATEGORY_OPTIONS = [
  { label: "Work", value: "work" },
  { label: "Personal", value: "personal" },
  { label: "Health", value: "health" },
  { label: "Learning", value: "learning" },
];

export const DEFAULT_TASK_VALUES: Partial<TaskFormTypes> = {
  priority: "medium",
  status: "pending",
  pomodoro: 0,
};
