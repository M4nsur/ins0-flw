import { useTaskDrawerStore } from "@/entities/task";
import { useCallback, useState } from "react";


export const useDeleteTask = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const closeDrawer = useTaskDrawerStore((state) => state.closeDrawer);

  const handleDeleteTask = useCallback(
    async (taskId: string) => {
      try {
        setIsDeleting(true);
        console.log("Deleting task:", taskId);

        await new Promise((res) => setTimeout(res, 1000));

        console.log("Deleted!");

        closeDrawer();
      } catch (error) {
        console.error("Error deleting task:", error);
      } finally {
        setIsDeleting(false);
      }
    },
    [closeDrawer]
  );

  return {
    isDeleting,
    handleDeleteTask,
  };
};
