import {
  ChevronDown,
  ChevronRight,
  Plus,
  Eye,
  Lock,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { CanvasElement } from "@/pages/Editor";

interface LayersPanelProps {
  elements?: CanvasElement[];
  selectedId?: string | null;
  onSelectElement?: (id: string | null) => void;
}

export function LayersPanel({
  elements = [],
  selectedId = null,
  onSelectElement,
}: LayersPanelProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(["elements"]),
  );

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const getElementIcon = (type: string) => {
    switch (type) {
      case "rectangle":
        return "▢";
      case "text":
        return "A";
      case "image":
        return "🖼";
      default:
        return "◯";
    }
  };

  const getElementLabel = (element: CanvasElement, index: number) => {
    if (element.type === "rectangle") return `Rectangle ${index + 1}`;
    if (element.type === "text") return `Text "${element.content || "Text"}"`;
    if (element.type === "image") return `Image ${index + 1}`;
    return `Element ${index + 1}`;
  };

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="flex items-center border-b border-sidebar-border px-3 py-2">
        <span className="text-xs font-semibold text-sidebar-foreground">
          Layers
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Elements Group */}
        <div className="px-1 py-2">
          <div className="flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-sidebar-accent rounded">
            <button
              onClick={() => toggleGroup("elements")}
              className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-accent rounded"
            >
              {expandedGroups.has("elements") ? (
                <ChevronDown className="w-3 h-3 text-sidebar-foreground" />
              ) : (
                <ChevronRight className="w-3 h-3 text-sidebar-foreground" />
              )}
            </button>

            <div className="flex-1 text-xs font-semibold text-sidebar-foreground">
              {elements.length > 0
                ? `Elements (${elements.length})`
                : "No Elements"}
            </div>

            <button className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-primary rounded opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Elements List */}
          {expandedGroups.has("elements") && elements.length > 0 && (
            <div className="mt-1 space-y-0">
              {elements.map((element, index) => (
                <div
                  key={element.id}
                  onClick={() => onSelectElement?.(element.id)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-1.5 text-xs cursor-pointer rounded group transition-colors",
                    selectedId === element.id
                      ? "bg-sidebar-accent text-sidebar-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                  )}
                >
                  <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center text-xs font-medium opacity-60">
                    {getElementIcon(element.type)}
                  </div>

                  <span className="flex-1 truncate font-medium text-xs">
                    {getElementLabel(element, index)}
                  </span>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-primary rounded text-sidebar-foreground transition-colors"
                      title="Toggle visibility"
                    >
                      <Eye className="w-3 h-3" />
                    </button>
                    <button
                      className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-destructive/50 rounded text-destructive/80 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {expandedGroups.has("elements") && elements.length === 0 && (
            <div className="px-4 py-3 text-xs text-muted-foreground text-center">
              No elements yet. Start drawing on the canvas.
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-sidebar-border px-3 py-2 bg-sidebar-accent/30">
        <div className="text-xs text-sidebar-foreground/70">
          {selectedId ? "Selected: 1 element" : "Select an element"}
        </div>
      </div>
    </div>
  );
}
