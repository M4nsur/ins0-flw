import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TerminalStore {
  isFullscreen: boolean;
  terminalSize: number;
  toggleFullscreen: () => void;
  setTerminalSize: (size: number) => void;
}

export const useTerminalStore = create<TerminalStore>()(
  persist(
    (set) => ({
      isFullscreen: false,
      terminalSize: -1,

      toggleFullscreen: () =>
        set((state) => ({ isFullscreen: !state.isFullscreen })),

      setTerminalSize: (size: number) =>
        set({ terminalSize: size, isFullscreen: false }),
    }),
    {
      name: "terminal-storage",
    }
  )
);
