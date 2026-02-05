import { TopBar } from '@/components/TopBar';
import { LeftSidebar } from '@/components/LeftSidebar';
import { LayersPanel } from '@/components/LayersPanel';
import { Canvas } from '@/components/Canvas';
import { RightSidebar } from '@/components/RightSidebar';
import { Toolbar } from '@/components/Toolbar';
import { useState } from 'react';

export default function Editor() {
  const [activeTool, setActiveTool] = useState('select');

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
          <Canvas activeTool={activeTool} />

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar onToolChange={setActiveTool} />
    </div>
  );
}
