import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { BaseModal } from "@/shared/ui";
import { TaskForm } from "./TaskForm";

export const AddTaskAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-bg-tertiary"
        size={"sm"}
      >
        Add task
      </Button>

      <BaseModal open={open} onOpenChange={setOpen} title="Add New Task">
        <TaskForm />
      </BaseModal>
    </>
  );
};
