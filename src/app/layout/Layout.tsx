import { Header } from "@/widgets/header/index";
import { Terminal } from "@/widgets/terminal";
import { Outlet } from "react-router";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useTerminalPanels } from "@/features/terminalResize";
import { useTerminalStore } from "@/entities/terminal";

export const Layout = () => {
  const { mainPanelRef, terminalPanelRef } = useTerminalPanels();
  const isFullscreen = useTerminalStore((state) => state.isFullscreen);
  const terminalSize = useTerminalStore((state) => state.terminalSize);
  const setTerminalSize = useTerminalStore((state) => state.setTerminalSize);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <PanelGroup direction="vertical" className="flex-1">
        <Panel
          ref={mainPanelRef}
          defaultSize={isFullscreen ? 0 : 100 - terminalSize}
          minSize={0}
          collapsible
        >
          <main className="h-full bg-bg-secondary px-2 sm:p-3 md:p-4 overflow-auto">
            <Outlet />
          </main>
        </Panel>
        <PanelResizeHandle className="h-1 bg-bg-primary hover:bg-text-secondary transition-colors" />
        <Panel
          ref={terminalPanelRef}
          defaultSize={isFullscreen ? 100 : terminalSize}
          minSize={3}
          maxSize={100}
          onResize={(size) => {
            if (size !== 100 && size > 3) {
              setTerminalSize(size);
            }
          }}
        >
          <Terminal />
        </Panel>
      </PanelGroup>
    </div>
  );
};
