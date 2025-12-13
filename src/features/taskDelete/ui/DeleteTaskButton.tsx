import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { ConfirmDialog } from "@/shared/ui";
import { useDeleteTask } from "../model/useDeleteTask";

interface DeleteTaskButtonProps {
  taskId: string;
  variant?: "icon" | "text";
  className?: string;
}

export const DeleteTaskButton = ({
  taskId,
  variant = "icon",
  className,
}: DeleteTaskButtonProps) => {
  const { isDeleting, handleDeleteTask } = useDeleteTask();

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const confirmDeletion = async () => {
    await handleDeleteTask(taskId);
  };

  const openConfirmationDialog = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowConfirmDelete(true);
  };

  useEffect(() => {
    if (!isDeleting) {
      setShowConfirmDelete(false);
    }
  }, [isDeleting]);

  if (variant === "icon") {
    return (
      <>
        <Button
          onClick={openConfirmationDialog}
          disabled={isDeleting}
          className={className || "hover:bg-bg-button-hover bg-bg-button"}
        >
          <Trash2 className="w-4 h-4" />
        </Button>

        {showConfirmDelete && (
          <ConfirmDialog
            open={showConfirmDelete}
            onOpenChange={setShowConfirmDelete}
            title="Are you sure?"
            description="This action cannot be undone. This will permanently delete the task."
            onConfirm={confirmDeletion}
            confirmClassName="bg-text-error hover:bg-red-600 text-text-primary"
            isConfirmDisabled={isDeleting}
            isLoadingText="Deleting..."
          />
        )}
      </>
    );
  }

  return (
    <>
      <Button
        onClick={openConfirmationDialog}
        disabled={isDeleting}
        variant="ghost"
        className={`${className} text-text-secondary hover:text-text-error hover:bg-bg-tertiary flex items-center gap-2`}
      >
        <Trash2 className="w-4 h-4" />

        {isDeleting ? "Deleting..." : "Delete"}
      </Button>

      {showConfirmDelete && (
        <ConfirmDialog
          open={showConfirmDelete}
          onOpenChange={setShowConfirmDelete}
          title="Are you sure?"
          description="This action cannot be undone. This will permanently delete the task."
          onConfirm={confirmDeletion}
          confirmClassName="bg-text-error hover:bg-red-600 text-text-primary"
          isConfirmDisabled={isDeleting}
          isLoadingText="Deleting..."
        />
      )}
    </>
  );
};
