import { useTerminalStore } from "@/features/terminal";
import { ToggleButton } from "@/features/terminal";
import { cn } from "@/shared/lib/classnames";
import { useEffect, useState } from "react";

export const Terminal = () => {
  const isFullscreen = useTerminalStore((state) => state.isFullscreen);
  const [delay, setDelay] = useState(isFullscreen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(isFullscreen);
    }, 0);

    return () => clearTimeout(timer);
  }, [isFullscreen]);
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "flex text-[11px] items-center justify-between pb-2 pt-1 px-2 border-bg-secondary ",
          delay ? "border-t-2 bg-bg-secondary" : "bg-bg-primary"
        )}
      >
        <div>Terminal</div>
        <ToggleButton />
      </div>
      <div className="overflow-auto p-2 h-screen bg-bg-secondary ">dsadsa</div>
    </div>
  );
};
