import { ZoomIn, ZoomOut, Maximize2, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreateFrameDialog } from '@/components/CreateFrameDialog';

interface Frame {
  id: string;
  name: string;
  width: number;
  height: number;
}

interface CanvasProps {
  onFrameCreate?: (frame: Frame) => void;
}

export function Canvas({ onFrameCreate }: CanvasProps) {
  const [zoom, setZoom] = useState(100);
  const [frames, setFrames] = useState<Frame[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const createNewFrame = (width: number, height: number, name: string) => {
    const newFrame: Frame = {
      id: `frame-${Date.now()}`,
      name,
      width,
      height,
    };
    setFrames([...frames, newFrame]);
    onFrameCreate?.(newFrame);
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

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-background to-background/80 overflow-hidden">
      {/* Canvas Area */}
      <div className="flex-1 overflow-auto relative bg-grid">
        {/* Grid Pattern - Subtle (30% opacity) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--border) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Canvas Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {frames.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center gap-6">
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-semibold text-foreground">No frames yet</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Create your first frame to start designing. Choose from presets or customize dimensions.
                </p>
              </div>
              <Button
                onClick={() => setDialogOpen(true)}
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Create Frame
              </Button>
            </div>
          ) : (
            /* Frames Grid */
            <div
              className="grid gap-8 p-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              }}
            >
              {frames.map((frame) => (
                <div
                  key={frame.id}
                  className="bg-card border-2 border-border rounded shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group"
                  style={{
                    aspectRatio: `${frame.width} / ${frame.height}`,
                    maxWidth: '280px',
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center p-4 group-hover:bg-secondary/20 rounded transition-colors">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{frame.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {frame.width} × {frame.height}
                      </p>
                      <button className="mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded hover:bg-primary/20 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Frame Button */}
              <button
                onClick={() => setDialogOpen(true)}
                className="border-2 border-dashed border-border rounded hover:border-primary/50 hover:bg-card/50 transition-all flex items-center justify-center"
                style={{
                  minHeight: '240px',
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">New Frame</span>
                </div>
              </button>
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
      </div>
    </div>
  );
}
