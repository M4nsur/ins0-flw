import { FormField } from "@/shared/ui/formField";
import { Input } from "@/shared/ui/input";
import { Controller, useForm } from "react-hook-form";
import { DropdownSelect } from "@/shared/ui/";
import {
  // CATEGORY_OPTIONS,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from "../model/constants";
import { Textarea } from "@/shared/ui/textarea";
import { DataPicker } from "@/shared/ui/dataPicker";
import { Button } from "@/shared/ui/button";
import { TaskFormSchema, type TaskFormTypes } from "@/entities/task";

import { zodResolver } from "@hookform/resolvers/zod";

export const TaskForm = () => {
  const form = useForm<TaskFormTypes>({
    resolver: zodResolver(TaskFormSchema),
  });

  const {
    register,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (data: TaskFormTypes) => {
    console.log("its work", data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
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
          className="bg-bg-tertiary border-bg-tertiary text-text-primary placeholder:text-text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all min-h-[100px] resize-none"
        />
      </FormField>

      {/* <FormField label="Category" error={errors.priority?.message}>
        <DropdownSelect
          name="priority"
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
        <FormField label="Status" error={errors.priority?.message}>
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

      <Button
        type="submit"
        className="bg-accent hover:bg-accent-hover text-text-primary font-medium py-2.5 mt-2 transition-all duration-200 hover:shadow-lg"
      >
        Create
      </Button>
    </form>
  );
};
