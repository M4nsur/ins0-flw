import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/Icon";
import { useTaskDrawerStore, type TaskCardType } from "@/entities/task";

interface EditTaskButtonProps {
  task: TaskCardType;
}

export const OpenEditTaskDrawerButton = ({ task }: EditTaskButtonProps) => {
  const openDrawer = useTaskDrawerStore((state) => state.openDrawer);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openDrawer(task, "edit");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex hover:bg-bg-button-hover bg-bg-button"
    >
      <Icon name="pencil" className="w-4 h-4" />
    </Button>
  );
};
