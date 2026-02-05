import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CanvasElement } from "@/pages/Editor";

interface CanvasProps {
  activeTool?: string;
  elements?: CanvasElement[];
  onElementsChange?: (elements: CanvasElement[]) => void;
  selectedId?: string | null;
  onSelectElement?: (id: string | null) => void;
}

const DRAG_THRESHOLD = 8;
const SNAP_GRID = 8;

export function Canvas({
  activeTool = "select",
  elements = [],
  onElementsChange,
  selectedId = null,
  onSelectElement,
}: CanvasProps) {
  const [zoom, setZoom] = useState(100);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOverlay, setDragOverlay] = useState<{
    id: string;
    x: number;
    y: number;
  } | null>(null);
  const [previewElement, setPreviewElement] = useState<CanvasElement | null>(
    null,
  );
  const canvasRef = useRef<HTMLDivElement>(null);

  const dragStateRef = useRef({
    pointerId: -1,
    elementId: "",
    startClientX: 0,
    startClientY: 0,
    elementStartX: 0,
    elementStartY: 0,
    hasCrossedThreshold: false,
  });

  // Snap to grid
  const snapToGrid = (value: number) => {
    return Math.round(value / SNAP_GRID) * SNAP_GRID;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeTool) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const canvasX = (e.clientX - rect.left) / (zoom / 100);
    const canvasY = (e.clientY - rect.top) / (zoom / 100);

    // Select tool: prepare drag
    if (activeTool === "select" && selectedId) {
      const element = elements.find((el) => el.id === selectedId);
      if (element) {
        dragStateRef.current = {
          pointerId: e.pointerId,
          elementId: selectedId,
          startClientX: e.clientX,
          startClientY: e.clientY,
          elementStartX: element.x,
          elementStartY: element.y,
          hasCrossedThreshold: false,
        };
        (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
        return;
      }
    }

    // Drawing tool: start creating shape
    if (activeTool !== "select" && activeTool !== "select-area") {
      setIsDrawing(true);
      dragStateRef.current = {
        pointerId: e.pointerId,
        elementId: "",
        startClientX: canvasX,
        startClientY: canvasY,
        elementStartX: canvasX,
        elementStartY: canvasY,
        hasCrossedThreshold: false,
      };
      setPreviewElement(null);
      (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== dragStateRef.current.pointerId) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const canvasX = (e.clientX - rect.left) / (zoom / 100);
    const canvasY = (e.clientY - rect.top) / (zoom / 100);

    // Handle drag (Select mode)
    if (dragStateRef.current.elementId && activeTool === "select") {
      const dx = e.clientX - dragStateRef.current.startClientX;
      const dy = e.clientY - dragStateRef.current.startClientY;

      // Check threshold
      if (!dragStateRef.current.hasCrossedThreshold) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
        dragStateRef.current.hasCrossedThreshold = true;
        setIsDragging(true);
      }

      // Calculate new position with snapping
      const newX = snapToGrid(
        dragStateRef.current.elementStartX + dx / (zoom / 100),
      );
      const newY = snapToGrid(
        dragStateRef.current.elementStartY + dy / (zoom / 100),
      );

      setDragOverlay({
        id: dragStateRef.current.elementId,
        x: newX,
        y: newY,
      });
      return;
    }

    // Handle drawing
    if (isDrawing && activeTool !== "select") {
      const startX = dragStateRef.current.startClientX;
      const startY = dragStateRef.current.startClientY;

      const width = Math.abs(canvasX - startX);
      const height = Math.abs(canvasY - startY);

      if (width > 10 || height > 10) {
        setPreviewElement({
          id: "preview",
          type: activeTool as "rectangle" | "text" | "image",
          x: Math.min(startX, canvasX),
          y: Math.min(startY, canvasY),
          width,
          height,
          fill: activeTool === "rectangle" ? "#a855f7" : undefined,
          content: activeTool === "text" ? "Text" : undefined,
        });
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== dragStateRef.current.pointerId) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const canvasX = (e.clientX - rect.left) / (zoom / 100);
    const canvasY = (e.clientY - rect.top) / (zoom / 100);

    // Commit drag (Select mode)
    if (
      dragStateRef.current.elementId &&
      isDragging &&
      activeTool === "select"
    ) {
      const element = elements.find(
        (el) => el.id === dragStateRef.current.elementId,
      );
      if (element && dragOverlay) {
        const updatedElements = elements.map((el) =>
          el.id === dragStateRef.current.elementId
            ? { ...el, x: dragOverlay.x, y: dragOverlay.y }
            : el,
        );
        onElementsChange?.(updatedElements);
      }
      setIsDragging(false);
      setDragOverlay(null);
    }

    // Commit drawing
    if (isDrawing && activeTool !== "select" && previewElement) {
      const width = Math.abs(canvasX - dragStateRef.current.startClientX);
      const height = Math.abs(canvasY - dragStateRef.current.startClientY);

      if (width > 10 && height > 10) {
        const newElement: CanvasElement = {
          id: `element-${Date.now()}`,
          type: activeTool as "rectangle" | "text" | "image",
          x: snapToGrid(previewElement.x),
          y: snapToGrid(previewElement.y),
          width: snapToGrid(width),
          height: snapToGrid(height),
          fill: activeTool === "rectangle" ? "#a855f7" : undefined,
          content: activeTool === "text" ? "Text" : undefined,
        };

        const newElements = [...elements, newElement];
        onElementsChange?.(newElements);
        onSelectElement?.(newElement.id);
      }
      setIsDrawing(false);
      setPreviewElement(null);
    }

    dragStateRef.current = {
      pointerId: -1,
      elementId: "",
      startClientX: 0,
      startClientY: 0,
      elementStartX: 0,
      elementStartY: 0,
      hasCrossedThreshold: false,
    };
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId === dragStateRef.current.pointerId) {
      setIsDragging(false);
      setDragOverlay(null);
      setIsDrawing(false);
      setPreviewElement(null);
      dragStateRef.current = {
        pointerId: -1,
        elementId: "",
        startClientX: 0,
        startClientY: 0,
        elementStartX: 0,
        elementStartY: 0,
        hasCrossedThreshold: false,
      };
    }
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 10, 400));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 10, 10));
  };

  const handleZoomReset = () => {
    setZoom(100);
  };

  const handleCanvasClick = () => {
    if (activeTool === "select" && !isDragging) {
      onSelectElement?.(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-black overflow-hidden">
      {/* Canvas Area */}
      <div
        ref={canvasRef}
        className={cn(
          "flex-1 overflow-auto relative bg-grid",
          activeTool === "select" ? "cursor-pointer" : "cursor-crosshair",
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onClick={handleCanvasClick}
        style={{ touchAction: "none" }}
      >
        {/* Grid Pattern - Subtle (30% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--border) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Canvas Content */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zoom: `${zoom}%`,
          }}
        >
          {elements.length === 0 && !isDrawing && (
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Select a tool and click-drag to create elements
              </p>
            </div>
          )}
        </div>

        {/* Elements Container */}
        <div
          style={{
            zoom: `${zoom}%`,
            transformOrigin: "top left",
          }}
        >
          {/* Existing elements (with placeholder while dragging) */}
          {elements.map((element) => {
            const isBeingDragged = isDragging && dragOverlay?.id === element.id;

            return (
              <div key={element.id}>
                {/* Placeholder (when dragging) */}
                {isBeingDragged && (
                  <div
                    className="absolute border-2 border-dashed border-primary/30 bg-primary/5"
                    style={{
                      left: `${element.x}px`,
                      top: `${element.y}px`,
                      width: `${element.width}px`,
                      height: `${element.height}px`,
                    }}
                  />
                )}

                {/* Element */}
                <div
                  onPointerDown={(e) => {
                    if (activeTool !== "select") return;
                    e.stopPropagation();

                    if (selectedId === element.id) {
                      handlePointerDown(e as any);
                    } else {
                      onSelectElement?.(element.id);
                    }
                  }}
                  className={cn(
                    "absolute pointer-events-auto transition-shadow",
                    activeTool === "select" && selectedId === element.id
                      ? "ring-2 ring-primary shadow-md cursor-grab active:cursor-grabbing"
                      : "cursor-pointer hover:ring-1 hover:ring-primary/50",
                  )}
                  style={{
                    left: `${isBeingDragged ? dragOverlay!.x : element.x}px`,
                    top: `${isBeingDragged ? dragOverlay!.y : element.y}px`,
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                    opacity: isBeingDragged ? 0.6 : 1,
                  }}
                >
                  {element.type === "rectangle" && (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: element.fill || "#a855f7",
                      }}
                    />
                  )}
                  {element.type === "text" && (
                    <div className="w-full h-full flex items-center justify-center bg-secondary p-2 border border-border/50">
                      <span className="text-xs text-foreground text-center overflow-hidden overflow-ellipsis">
                        {element.content}
                      </span>
                    </div>
                  )}
                  {element.type === "image" && (
                    <div className="w-full h-full bg-muted border border-border flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        Image
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Preview element while drawing */}
          {previewElement && isDrawing && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${previewElement.x}px`,
                top: `${previewElement.y}px`,
                width: `${previewElement.width}px`,
                height: `${previewElement.height}px`,
                border: "2px dashed hsl(var(--primary))",
              }}
            >
              {previewElement.type === "rectangle" && (
                <div
                  className="w-full h-full"
                  style={{
                    backgroundColor: "#a855f7",
                    opacity: 0.3,
                  }}
                />
              )}
              {previewElement.type === "text" && (
                <div className="w-full h-full flex items-center justify-center bg-secondary/30 p-2">
                  <span className="text-xs text-foreground/50">Text</span>
                </div>
              )}
              {previewElement.type === "image" && (
                <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/50">
                    Image
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="bg-card border-t border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-xs font-medium text-muted-foreground w-12 text-center">
            {zoom}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleZoomReset}
          className="text-xs"
          title="Fit to View"
        >
          <Maximize2 className="w-4 h-4 mr-2" />
          Fit
        </Button>

        <div className="text-xs text-muted-foreground">
          {elements.length} element{elements.length !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}
