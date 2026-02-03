import { ZoomIn, ZoomOut, Maximize2, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  const [frames, setFrames] = useState<Frame[]>([
    { id: 'frame-1', name: 'Home Screen', width: 360, height: 640 },
    { id: 'frame-2', name: 'Settings', width: 360, height: 640 },
  ]);
  const [showWelcome, setShowWelcome] = useState(false);

  const createNewFrame = () => {
    const newFrame: Frame = {
      id: `frame-${Date.now()}`,
      name: `Frame ${frames.length + 1}`,
      width: 360,
      height: 640,
    };
    setFrames([...frames, newFrame]);
    setShowWelcome(false);
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
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zoom: `${zoom}%`,
          }}
        >
          {showWelcome ? (
            /* Welcome Frame */
            <div
              className="w-96 bg-card border-2 border-primary rounded-lg shadow-xl overflow-hidden"
              style={{
                maxHeight: '640px',
                maxWidth: '360px',
              }}
            >
              {/* iOS-like Safe Area */}
              <div className="h-12 bg-gradient-to-b from-secondary to-transparent flex items-center justify-between px-4">
                <span className="text-xs font-semibold text-foreground">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-foreground">Welcome to Rbxigma</h2>
                  <p className="text-sm text-muted-foreground">
                    Figma++ for Roblox UI. Design powerful interfaces with ease.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <button
                    onClick={createNewFrame}
                    className="w-full px-4 py-3 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md active:shadow-none flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Create Frame
                  </button>
                  <button className="w-full px-4 py-3 bg-card border border-border text-foreground rounded font-medium text-sm hover:bg-card/80 transition-colors">
                    Open Template
                  </button>
                </div>

                {/* Feature Highlights */}
                <div className="pt-6 space-y-3 border-t border-border">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">✓</span>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-foreground">Roblox Preview</p>
                      <p className="text-muted-foreground">See your UI in real Roblox</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">✓</span>
                    </div>
                    <div className="text-xs">
                      <p className="font-medium text-foreground">Smart Export</p>
                      <p className="text-muted-foreground">Export directly to Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Multiple Frames Grid */
            <div className="grid grid-cols-2 gap-8 p-8">
              {frames.map((frame) => (
                <div
                  key={frame.id}
                  className="bg-card border-2 border-border rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                  style={{
                    aspectRatio: `${frame.width} / ${frame.height}`,
                    maxWidth: '240px',
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center p-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{frame.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {frame.width}x{frame.height}
                      </p>
                      <button
                        onClick={createNewFrame}
                        className="mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded hover:bg-primary/20 transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Frame Button */}
              <button
                onClick={createNewFrame}
                className="border-2 border-dashed border-border rounded-lg hover:border-primary/50 hover:bg-card/50 transition-all flex items-center justify-center"
                style={{
                  aspectRatio: `${frames[0].width} / ${frames[0].height}`,
                  maxWidth: '240px',
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
