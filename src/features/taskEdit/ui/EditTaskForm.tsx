// features/task/taskEdit/ui/EditTaskForm.tsx
import { FormField } from "@/shared/ui/formField";
import { Input } from "@/shared/ui/input";
import { Controller, useForm } from "react-hook-form";
import { DropdownSelect } from "@/shared/ui/";
import {
  // CATEGORY_OPTIONS,
  DEFAULT_TASK_VALUES,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "@/features/taskAdd/model/constants";
import { Textarea } from "@/shared/ui/textarea";
import { DataPicker } from "@/shared/ui/dataPicker";
import { Button } from "@/shared/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskDrawerStore } from "@/entities/task";
import { TaskFormSchema, type TaskFormTypes } from "@/entities/task";

export const EditTaskForm = () => {
  const { data: task, closeDrawer } = useTaskDrawerStore();

  const form = useForm<TaskFormTypes>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: task || DEFAULT_TASK_VALUES,
  });

  const {
    register,
    control,
    formState: { errors, isDirty },
  } = form;

  const onSubmit = (data: TaskFormTypes) => {
    console.log("Edit rn", data);
    closeDrawer();
  };

  const handleCancel = () => {
    form.reset();
    closeDrawer();
  };

  return (
    <div className="text-[12px]">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField label="Task title" error={errors.title?.message}>
          <Input
            placeholder="Enter task name"
            {...register("title")}
            className="bg-bg-tertiary border-bg-tertiary text-text-primary placeholder:text-text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
          />
        </FormField>

        <FormField label="Description">
          <Textarea
            placeholder="Add a description..."
            {...register("description")}
            className="bg-bg-tertiary border-bg-tertiary text-text-primary placeholder:text-text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all min-h-[150px] resize-none"
          />
        </FormField>

        {/* <FormField label="Category" error={errors.category?.message}>
        <DropdownSelect
          name="category"
          control={control}
          options={CATEGORY_OPTIONS}
          className="w-full bg-bg-tertiary border-bg-tertiary hover:bg-bg-button-hover transition-colors"
        />
      </FormField> */}

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Priority" error={errors.priority?.message}>
            <DropdownSelect
              name="priority"
              control={control}
              options={PRIORITY_OPTIONS}
              className="w-full bg-bg-tertiary border-bg-tertiary hover:bg-bg-button-hover transition-colors"
            />
          </FormField>

          <FormField label="Status" error={errors.status?.message}>
            <DropdownSelect
              name="status"
              control={control}
              options={STATUS_OPTIONS}
              className="w-full bg-bg-tertiary border-bg-tertiary hover:bg-bg-button-hover transition-colors"
            />
          </FormField>
        </div>

        <FormField label="Due Date">
          <Controller
            name="dueDate"
            control={control}
            render={({ field }) => (
              <DataPicker value={field.value} onChange={field.onChange} />
            )}
          />
        </FormField>

        <div className="flex gap-3 mt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="flex-1 border-bg-tertiary text-text-secondary hover:bg-bg-tertiary hover:text-text-primary transition-all"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!isDirty}
            className="flex-1 bg-accent hover:bg-accent-hover text-text-primary font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
