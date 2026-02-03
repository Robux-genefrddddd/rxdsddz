import {
  Pointer,
  Square,
  Type,
  Image,
  PenTool,
  Frame,
  AlignLeft,
  Distribution3,
  Maximize2,
  Layers,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const toolGroups = [
  {
    name: 'selection',
    tools: [
      { id: 'select', label: 'Select', icon: Pointer, shortcut: 'V' },
      { id: 'frame', label: 'Frame', icon: Frame, shortcut: 'F' },
    ],
  },
  {
    name: 'shapes',
    tools: [
      { id: 'rectangle', label: 'Rectangle', icon: Square, shortcut: 'R' },
      { id: 'text', label: 'Text', icon: Type, shortcut: 'T' },
      { id: 'image', label: 'Image', icon: Image, shortcut: 'Shift+I' },
    ],
  },
  {
    name: 'drawing',
    tools: [
      { id: 'pen', label: 'Pen', icon: PenTool, shortcut: 'P' },
    ],
  },
  {
    name: 'arrange',
    tools: [
      { id: 'align', label: 'Align', icon: AlignLeft, shortcut: 'Ctrl+A' },
      { id: 'distribute', label: 'Distribute', icon: Space3, shortcut: 'Ctrl+D' },
      { id: 'arrange', label: 'Arrange', icon: Maximize2, shortcut: '' },
    ],
  },
  {
    name: 'component',
    tools: [
      { id: 'component', label: 'Component', icon: Layers, shortcut: 'Ctrl+K' },
      { id: 'variant', label: 'Variant', icon: Zap, shortcut: 'Ctrl+Alt+K' },
    ],
  },
];

export function Toolbar() {
  const [activeTool, setActiveTool] = useState('select');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-card border border-border rounded-lg shadow-lg p-2 flex gap-1 flex-wrap justify-center max-w-2xl">
      {toolGroups.map((group, groupIndex) => (
        <div key={group.name} className="flex gap-1">
          {group.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Button
                key={tool.id}
                variant={activeTool === tool.id ? 'default' : 'ghost'}
                size="sm"
                className={cn(
                  'w-10 h-10 p-0 relative group',
                  activeTool === tool.id && 'bg-primary text-primary-foreground'
                )}
                onClick={() => setActiveTool(tool.id)}
                title={`${tool.label} (${tool.shortcut})`}
              >
                <Icon className="w-4 h-4" />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-secondary text-foreground text-xs py-1 px-2 rounded whitespace-nowrap z-10 border border-border">
                  {tool.label}
                  {tool.shortcut && (
                    <span className="text-muted-foreground ml-1">({tool.shortcut})</span>
                  )}
                </div>
              </Button>
            );
          })}
          {groupIndex < toolGroups.length - 1 && (
            <div className="w-px bg-border mx-1" />
          )}
        </div>
      ))}
    </div>
  );
}
