import { useEffect, useRef } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import { useTerminalStore } from "@/entities/terminal";

export const useTerminalPanels = () => {
  const isFullscreen = useTerminalStore((state) => state.isFullscreen);
  const terminalSize = useTerminalStore((state) => state.terminalSize);
  const mainPanelRef = useRef<ImperativePanelHandle>(null);
  const terminalPanelRef = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isFullscreen) {
        mainPanelRef.current?.collapse();
        terminalPanelRef.current?.expand();
      } else {
        mainPanelRef.current?.expand();
        terminalPanelRef.current?.resize(terminalSize);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [isFullscreen, terminalSize]);

  return {
    mainPanelRef,
    terminalPanelRef,
  };
};
