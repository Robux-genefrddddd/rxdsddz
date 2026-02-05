import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import type { CanvasElement } from '@/pages/Editor';

interface CanvasProps {
  activeTool?: string;
  elements?: CanvasElement[];
  onElementsChange?: (elements: CanvasElement[]) => void;
  selectedId?: string | null;
  onSelectElement?: (id: string | null) => void;
}

export function Canvas({
  activeTool = 'select',
  elements = [],
  onElementsChange,
  selectedId = null,
  onSelectElement,
}: CanvasProps) {
  const [zoom, setZoom] = useState(100);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [previewElement, setPreviewElement] = useState<CanvasElement | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!activeTool) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / (zoom / 100);
    const y = (e.clientY - rect.top) / (zoom / 100);

    // If Select tool and element is selected, prepare to drag
    if (activeTool === 'select' && selectedId) {
      const element = elements.find((el) => el.id === selectedId);
      if (element) {
        setIsDragging(true);
        setDragOffset({
          x: x - element.x,
          y: y - element.y,
        });
        return;
      }
    }

    // If drawing tool (not select), start creating shape
    if (activeTool !== 'select' && activeTool !== 'select-area') {
      setIsDrawing(true);
      setStartPos({ x, y });
      setPreviewElement(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / (zoom / 100);
    const y = (e.clientY - rect.top) / (zoom / 100);

    // Handle dragging selected element
    if (isDragging && selectedId) {
      const updatedElements = elements.map((el) =>
        el.id === selectedId
          ? {
              ...el,
              x: x - dragOffset.x,
              y: y - dragOffset.y,
            }
          : el
      );
      onElementsChange?.(updatedElements);
      return;
    }

    // Handle drawing new shape
    if (!isDrawing) return;

    const width = Math.abs(x - startPos.x);
    const height = Math.abs(y - startPos.y);

    // Show preview while dragging
    setPreviewElement({
      id: 'preview',
      type: activeTool as 'rectangle' | 'text' | 'image',
      x: Math.min(startPos.x, x),
      y: Math.min(startPos.y, y),
      width,
      height,
      fill: activeTool === 'rectangle' ? '#a855f7' : undefined,
      content: activeTool === 'text' ? 'Text' : undefined,
    });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / (zoom / 100);
    const y = (e.clientY - rect.top) / (zoom / 100);

    const width = Math.abs(x - startPos.x);
    const height = Math.abs(y - startPos.y);

    // Only create if drag distance is meaningful
    const minSize = 20;
    if (width > minSize && height > minSize) {
      const newElement: CanvasElement = {
        id: `element-${Date.now()}`,
        type: activeTool as 'rectangle' | 'text' | 'image',
        x: Math.min(startPos.x, x),
        y: Math.min(startPos.y, y),
        width,
        height,
        fill: activeTool === 'rectangle' ? '#a855f7' : undefined,
        content: activeTool === 'text' ? 'Text' : undefined,
      };

      const newElements = [...elements, newElement];
      onElementsChange?.(newElements);
      onSelectElement?.(newElement.id);
    }

    setIsDrawing(false);
    setPreviewElement(null);
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

  const handleElementClick = (e: React.MouseEvent, elementId: string) => {
    e.stopPropagation();
    if (activeTool === 'select') {
      onSelectElement?.(elementId);
    }
  };

  const handleCanvasClick = () => {
    if (activeTool === 'select') {
      onSelectElement?.(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-background to-background/80 overflow-hidden">
      {/* Canvas Area */}
      <div
        ref={canvasRef}
        className="flex-1 overflow-auto relative bg-grid cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDrawing(false)}
        onClick={handleCanvasClick}
      >
        {/* Grid Pattern - Subtle (30% opacity) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--border) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
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

        {/* Elements and Preview */}
        <div
          style={{
            zoom: `${zoom}%`,
            transformOrigin: 'top left',
          }}
        >
          {/* Existing elements */}
          {elements.map((element) => (
            <div
              key={element.id}
              onClick={(e) => handleElementClick(e, element.id)}
              className={`absolute cursor-pointer transition-all pointer-events-auto ${
                selectedId === element.id ? 'ring-2 ring-primary shadow-md' : 'hover:ring-1 hover:ring-primary/50'
              }`}
              style={{
                left: `${element.x}px`,
                top: `${element.y}px`,
                width: `${element.width}px`,
                height: `${element.height}px`,
              }}
            >
              {element.type === 'rectangle' && (
                <div
                  className="w-full h-full rounded transition-all"
                  style={{
                    backgroundColor: element.fill || '#a855f7',
                    opacity: 0.8,
                  }}
                />
              )}
              {element.type === 'text' && (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50 rounded p-2 border border-border/50">
                  <span className="text-xs text-foreground text-center overflow-hidden overflow-ellipsis">{element.content}</span>
                </div>
              )}
              {element.type === 'image' && (
                <div className="w-full h-full bg-muted rounded border border-border flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Image</span>
                </div>
              )}
            </div>
          ))}

          {/* Preview element while dragging */}
          {previewElement && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${previewElement.x}px`,
                top: `${previewElement.y}px`,
                width: `${previewElement.width}px`,
                height: `${previewElement.height}px`,
                border: '2px dashed hsl(var(--primary))',
              }}
            >
              {previewElement.type === 'rectangle' && (
                <div
                  className="w-full h-full rounded"
                  style={{
                    backgroundColor: '#a855f7',
                    opacity: 0.3,
                  }}
                />
              )}
              {previewElement.type === 'text' && (
                <div className="w-full h-full flex items-center justify-center bg-secondary/30 rounded p-2">
                  <span className="text-xs text-foreground/50">Text</span>
                </div>
              )}
              {previewElement.type === 'image' && (
                <div className="w-full h-full bg-muted/30 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/50">Image</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="bg-card border-t border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleZoomOut} title="Zoom Out">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-xs font-medium text-muted-foreground w-12 text-center">
            {zoom}%
          </span>
          <Button variant="ghost" size="sm" onClick={handleZoomIn} title="Zoom In">
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
          {elements.length} element{elements.length !== 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}
