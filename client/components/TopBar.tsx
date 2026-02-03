import { Search, Eye, Share2, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border h-14 px-4 flex items-center justify-between gap-4">
      {/* Left Section: Logo and Project Name */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-primary-foreground">Rx</span>
          </div>
          <span className="text-sm font-semibold text-foreground hidden sm:inline">Rbxigma</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-border min-w-0">
          <span className="text-xs text-muted-foreground truncate">My Project</span>
          <span className="text-xs text-muted-foreground">/ Frame 1</span>
        </div>
      </div>

      {/* Center Section: Search */}
      <div className="flex-1 max-w-xs hidden lg:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 text-foreground placeholder-muted-foreground"
          />
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-xs"
          title="Preview"
        >
          <Eye className="w-4 h-4" />
          <span className="hidden sm:inline">Preview</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-xs"
          title="Export"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="gap-2 text-xs"
          title="Share"
        >
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>

        {/* Divider */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Avatar */}
        <button
          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-card transition-all"
          title="User Profile"
        >
          <User className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
}
