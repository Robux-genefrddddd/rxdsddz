import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Canvas() {
  const [zoom, setZoom] = useState(100);

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
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--border)) 1px, transparent 1px)
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
          {/* Frame Preview */}
          <div
            className="w-96 h-screen bg-card border-2 border-primary rounded-lg shadow-xl overflow-hidden"
            style={{
              maxHeight: '640px',
              maxWidth: '360px',
            }}
          >
            {/* iOS-like Safe Area */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-secondary to-transparent z-10 flex items-center justify-between px-4">
              <span className="text-xs font-semibold text-foreground">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-foreground" />
                <div className="w-1 h-1 rounded-full bg-foreground" />
                <div className="w-1 h-1 rounded-full bg-foreground" />
              </div>
            </div>

            {/* Content Area */}
            <div className="mt-12 p-6 space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-foreground">Welcome to Rbxigma</h2>
                <p className="text-sm text-muted-foreground">
                  Figma++ for Roblox UI. Design powerful interfaces with ease.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                  Create Frame
                </button>
                <button className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors">
                  Open Template
                </button>
              </div>

              {/* Feature Highlights */}
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary-foreground">✓</span>
                  </div>
                  <div className="text-xs">
                    <p className="font-medium text-foreground">Roblox Preview</p>
                    <p className="text-muted-foreground">See your UI in real Roblox</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
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
