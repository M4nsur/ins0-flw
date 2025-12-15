import { useTerminalStore } from "@/entities/terminal";
import { ToggleButton } from "@/features/terminalResize";
import { cn } from "@/shared/lib/classnames";
import { useEffect, useState } from "react";

export const Terminal = () => {
  const isFullscreen = useTerminalStore((state) => state.isFullscreen);
  const terminalSize = useTerminalStore((state) => state.terminalSize);
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
          "flex justify-between pt-1 px-2 border-bg-secondary items-center",
          delay ? "border-t-2 bg-bg-secondary" : "bg-bg-primary"
        )}
      >
        <div>Terminal</div>
        <ToggleButton />
      </div>
      <div
        className={cn(
          "overflow-auto h-screen bg-bg-secondary pt-4",
          terminalSize < 5 ? "hidden" : ""
        )}
      ></div>
    </div>
  );
};
