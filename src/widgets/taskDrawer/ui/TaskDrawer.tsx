import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/lib/shadcn";
import { Tabs, TabsList, TabsTrigger } from "@/shared/lib/shadcn";

import { Button } from "@/shared/ui/button";
import { TaskInfo } from "@/entities/task/ui/TaskInfo";

import { DeleteTaskButton } from "@/features/taskDelete"; // ✅
import { useTaskDrawerStore } from "@/entities/task";
import { EditTaskForm } from "@/features/taskEdit/ui/EditTaskForm";

export const TaskDrawer = () => {
  const {
    isOpen,
    data: task,
    mode,
    closeDrawer,
    setMode,
  } = useTaskDrawerStore();

  const tabs = [
    { value: "view" as const, label: "View" },
    { value: "edit" as const, label: "Edit" },
  ];

  if (!isOpen || !task) {
    return null;
  }

  return (
    <>
      <Drawer open={isOpen} onOpenChange={closeDrawer} direction="right">
        <DrawerContent className="bg-bg-primary border-bg-tertiary">
          <div className="flex flex-col h-full">
            {/* Header */}
            <DrawerHeader className="border-b border-bg-tertiary px-6 py-4 flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <DrawerTitle className="text-text-primary text-lg font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  {task.title}
                </DrawerTitle>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeDrawer}
                  className="text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <Tabs
                value={mode}
                onValueChange={(v) => setMode(v as "view" | "edit")}
              >
                <TabsList className="bg-bg-tertiary border-none h-10">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-bg-secondary text-text-secondary data-[state=active]:text-text-primary flex items-center gap-2"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {mode === "view" ? (
                <TaskInfo task={task} />
              ) : (
                <div className="text-text-secondary italic">
                  <EditTaskForm />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-bg-tertiary px-6 py-4 flex items-center justify-between shrink-0">
              <DeleteTaskButton taskId={task.id} variant="text" />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
