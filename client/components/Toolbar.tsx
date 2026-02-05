import {
  Pointer,
  Square,
  Type,
  Image,
  PenTool,
  Frame,
  AlignLeft,
  ArrowUpDown,
  Maximize2,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const toolGroups = [
  {
    name: "selection",
    tools: [
      { id: "select", label: "Select", icon: Pointer, shortcut: "V" },
      { id: "frame", label: "Frame", icon: Frame, shortcut: "F" },
    ],
  },
  {
    name: "shapes",
    tools: [
      { id: "rectangle", label: "Rectangle", icon: Square, shortcut: "R" },
      { id: "text", label: "Text", icon: Type, shortcut: "T" },
      { id: "image", label: "Image", icon: Image, shortcut: "Shift+I" },
    ],
  },
  {
    name: "drawing",
    tools: [{ id: "pen", label: "Pen", icon: PenTool, shortcut: "P" }],
  },
  {
    name: "arrange",
    tools: [
      { id: "align", label: "Align", icon: AlignLeft, shortcut: "Ctrl+A" },
      {
        id: "distribute",
        label: "Distribute",
        icon: ArrowUpDown,
        shortcut: "Ctrl+D",
      },
      { id: "arrange", label: "Arrange", icon: Maximize2, shortcut: "" },
    ],
  },
  {
    name: "component",
    tools: [
      { id: "component", label: "Component", icon: Layers, shortcut: "Ctrl+K" },
      { id: "variant", label: "Variant", icon: Zap, shortcut: "Ctrl+Alt+K" },
    ],
  },
];

interface ToolbarProps {
  onToolChange?: (toolId: string) => void;
}

export function Toolbar({ onToolChange }: ToolbarProps) {
  const [activeTool, setActiveTool] = useState("select");

  const handleToolSelect = (toolId: string) => {
    setActiveTool(toolId);
    onToolChange?.(toolId);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/95 backdrop-blur-md border border-neutral-900 rounded-lg shadow-lg p-2 flex gap-1 flex-wrap justify-center max-w-2xl">
      {toolGroups.map((group, groupIndex) => (
        <div key={group.name} className="flex gap-1">
          {group.tools.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <Button
                key={tool.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                className={cn(
                  "w-9 h-9 relative group transition-all",
                  isActive && "bg-violet-600 text-white shadow-sm",
                )}
                onClick={() => handleToolSelect(tool.id)}
                title={`${tool.label} (${tool.shortcut})`}
              >
                <Icon className="w-4 h-4" />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-900 text-white text-xs py-2 px-2 rounded whitespace-nowrap z-10 border border-neutral-800">
                  <div className="font-medium">{tool.label}</div>
                  {tool.shortcut && (
                    <div className="text-muted-foreground text-xs">
                      {tool.shortcut}
                    </div>
                  )}
                </div>
              </Button>
            );
          })}
          {groupIndex < toolGroups.length - 1 && (
            <div className="w-px h-6 bg-border/40 mx-1" />
          )}
        </div>
      ))}
    </div>
  );
}
