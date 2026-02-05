import { Search, Eye, Share2, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-900 h-14">
      <div className="flex items-center justify-between gap-4 px-4 h-full">
        
        {/* Left Section: Logo and Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-white">Rx</span>
          </div>
          <span className="text-sm font-semibold text-white hidden sm:inline">Rbxigma</span>

          {/* Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-neutral-800 min-w-0">
            <span className="text-xs text-neutral-500 truncate">My Project</span>
            <span className="text-xs text-neutral-500">/</span>
            <span className="text-xs text-neutral-500">Frame 1</span>
          </div>
        </div>

        {/* Center Section: Search */}
        <div className="flex-1 max-w-sm hidden lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-0 text-white placeholder-neutral-600"
            />
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            title="Preview"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Preview</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            title="Export"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>

          {/* Divider */}
          <div className="w-px h-6 bg-neutral-800 mx-1" />

          {/* Avatar */}
          <button
            className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center hover:ring-2 hover:ring-violet-500 hover:ring-offset-2 hover:ring-offset-black transition-all"
            title="User Profile"
          >
            <User className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
