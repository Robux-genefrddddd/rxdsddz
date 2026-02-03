import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CreateFrameDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateFrame: (width: number, height: number, name: string) => void;
}

const presets = [
  { name: 'iPhone 14', width: 390, height: 844 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Mobile Square', width: 360, height: 360 },
];

export function CreateFrameDialog({ isOpen, onClose, onCreateFrame }: CreateFrameDialogProps) {
  const [width, setWidth] = useState(360);
  const [height, setHeight] = useState(640);
  const [frameName, setFrameName] = useState('');

  const handleCreate = () => {
    if (frameName.trim()) {
      onCreateFrame(width, height, frameName);
      setFrameName('');
      setWidth(360);
      setHeight(640);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-card border border-border rounded-lg shadow-lg w-full max-w-md p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Create New Frame</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Frame Name */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground block">Frame Name</label>
          <input
            type="text"
            value={frameName}
            onChange={(e) => setFrameName(e.target.value)}
            placeholder="e.g., Home Screen, Settings..."
            className="w-full h-9 px-3 py-2 text-sm bg-secondary border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
          />
        </div>

        {/* Presets */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground block">Presets</label>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => {
                  setWidth(preset.width);
                  setHeight(preset.height);
                }}
                className="px-3 py-2 rounded border border-border hover:border-primary/50 hover:bg-secondary transition-all text-xs font-medium text-foreground text-center"
              >
                <div className="font-medium">{preset.name}</div>
                <div className="text-xs text-muted-foreground">
                  {preset.width}x{preset.height}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Size */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground block">Custom Size</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground block">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Math.max(100, parseInt(e.target.value) || 100))}
                className="w-full h-9 px-3 py-2 text-sm bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground block">Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value) || 100))}
                className="w-full h-9 px-3 py-2 text-sm bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground block">Preview</label>
          <div className="bg-secondary rounded border border-border p-4 flex items-center justify-center min-h-32">
            <div
              className="bg-background border-2 border-primary/30 rounded"
              style={{
                aspectRatio: `${width} / ${height}`,
                maxWidth: '100%',
                maxHeight: '100px',
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!frameName.trim()}
            className="flex-1 gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Frame
          </Button>
        </div>
      </div>
    </div>
  );
}
