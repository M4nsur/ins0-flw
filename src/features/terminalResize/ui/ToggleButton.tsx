import { ArrowDown, ArrowUp } from "lucide-react";
import { useTerminalStore } from "../../../entities/terminal/model/useTerminalStore ";

export const ToggleButton = () => {
  const isFullscreen = useTerminalStore((state) => state.isFullscreen);
  const toggleFullscreen = useTerminalStore((state) => state.toggleFullscreen);

  return (
    <button className="bg-inherit" onClick={toggleFullscreen}>
      {isFullscreen ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
    </button>
  );
};
