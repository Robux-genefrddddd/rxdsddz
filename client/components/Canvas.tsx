import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface CanvasElement {
  id: string;
  type: 'rectangle' | 'text' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  fill?: string;
  selected?: boolean;
}

interface CanvasProps {
  activeTool?: string;
}

export function Canvas({ activeTool = 'select' }: CanvasProps) {
  const [zoom, setZoom] = useState(100);
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTool === 'select' || activeTool === 'select-area') return;
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / (zoom / 100);
    const y = (e.clientY - rect.top) / (zoom / 100);

    setIsDrawing(true);
    setStartPos({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || activeTool === 'select') return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / (zoom / 100);
    const y = (e.clientY - rect.top) / (zoom / 100);

    // Just track for visual feedback if needed
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || activeTool === 'select') return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const endX = (e.clientX - rect.left) / (zoom / 100);
    const endY = (e.clientY - rect.top) / (zoom / 100);

    // Only create if drag distance is meaningful
    const minSize = 30;
    const width = Math.abs(endX - startPos.x);
    const height = Math.abs(endY - startPos.y);

    if (width > minSize && height > minSize) {
      const newElement: CanvasElement = {
        id: `element-${Date.now()}`,
        type: activeTool as 'rectangle' | 'text' | 'image',
        x: Math.min(startPos.x, endX),
        y: Math.min(startPos.y, endY),
        width,
        height,
        content: activeTool === 'text' ? 'Text' : undefined,
        fill: activeTool === 'rectangle' ? '#a855f7' : undefined,
      };

      setElements([...elements, newElement]);
      setSelectedId(newElement.id);
    }

    setIsDrawing(false);
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
      setSelectedId(elementId);
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
          {elements.length === 0 && (
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Select a tool and click-drag to create elements
              </p>
            </div>
          )}
        </div>

        {/* Elements */}
        <div
          style={{
            zoom: `${zoom}%`,
            transformOrigin: 'top left',
          }}
        >
          {elements.map((element) => (
            <div
              key={element.id}
              onClick={(e) => handleElementClick(e, element.id)}
              className={`absolute cursor-pointer transition-all ${
                selectedId === element.id ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-primary/50'
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
                  className="w-full h-full rounded"
                  style={{
                    backgroundColor: element.fill || '#a855f7',
                    opacity: 0.8,
                  }}
                />
              )}
              {element.type === 'text' && (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50 rounded p-2">
                  <span className="text-xs text-foreground text-center">{element.content}</span>
                </div>
              )}
              {element.type === 'image' && (
                <div className="w-full h-full bg-muted rounded border border-border flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Image</span>
                </div>
              )}
            </div>
          ))}
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
