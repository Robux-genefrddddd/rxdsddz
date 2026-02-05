import { TopBar } from '@/components/TopBar';
import { LeftSidebar } from '@/components/LeftSidebar';
import { LayersPanel } from '@/components/LayersPanel';
import { Canvas } from '@/components/Canvas';
import { RightSidebar } from '@/components/RightSidebar';
import { Toolbar } from '@/components/Toolbar';
import { useState } from 'react';

export interface CanvasElement {
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

export default function Editor() {
  const [activeTool, setActiveTool] = useState('select');
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleElementsChange = (newElements: CanvasElement[]) => {
    setElements(newElements);
  };

  const handleElementSelect = (id: string | null) => {
    setSelectedId(id);
  };

  return (
    <div className="w-full h-screen bg-background text-foreground dark">
      {/* Top Bar */}
      <TopBar />

      {/* Main Content */}
      <div className="flex pt-14 h-[calc(100vh-56px)]">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Editor Area */}
        <div className="flex flex-1 ml-64">
          {/* Layers Panel */}
          <LayersPanel elements={elements} selectedId={selectedId} onSelectElement={handleElementSelect} />

          {/* Canvas */}
          <Canvas
            activeTool={activeTool}
            elements={elements}
            onElementsChange={handleElementsChange}
            selectedId={selectedId}
            onSelectElement={handleElementSelect}
          />

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar onToolChange={setActiveTool} />
    </div>
  );
}
