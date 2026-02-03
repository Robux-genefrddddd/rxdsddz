import { TopBar } from '@/components/TopBar';
import { LeftSidebar } from '@/components/LeftSidebar';
import { LayersPanel } from '@/components/LayersPanel';
import { Canvas } from '@/components/Canvas';
import { RightSidebar } from '@/components/RightSidebar';
import { Toolbar } from '@/components/Toolbar';
import { useState } from 'react';

interface Frame {
  id: string;
  name: string;
  width: number;
  height: number;
}

export default function Editor() {
  const [frames, setFrames] = useState<Frame[]>([]);

  const handleFrameCreate = (frame: Frame) => {
    setFrames([...frames, frame]);
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
          <LayersPanel />

          {/* Canvas */}
          <Canvas onFrameCreate={handleFrameCreate} />

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />
    </div>
  );
}
