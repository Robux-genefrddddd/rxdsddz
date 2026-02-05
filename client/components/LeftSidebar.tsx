import { Home, Folder, Palette, Layers3, Grid3x3, Zap, Download, BookOpen, Users, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', icon: Home, href: '/', id: 'home' },
  { label: 'Projects', icon: Folder, href: '/projects', id: 'projects' },
  { label: 'Assets', icon: Palette, href: '/assets', id: 'assets' },
  { label: 'Components', icon: Layers3, href: '/components', id: 'components' },
  { label: 'Design System', icon: Grid3x3, href: '/design-system', id: 'design-system' },
  { label: 'Plugins', icon: Zap, href: '/plugins', id: 'plugins' },
];

const bottomItems = [
  { label: 'Export', icon: Download, href: '/export', id: 'export' },
  { label: 'Docs', icon: BookOpen, href: '/docs', id: 'docs' },
  { label: 'Community', icon: Users, href: '/community', id: 'community' },
];

export function LeftSidebar() {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="fixed left-0 top-14 bottom-0 w-64 bg-black border-r border-neutral-900 flex flex-col">
      
      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all group border-l-2 border-l-transparent',
                active
                  ? 'bg-neutral-900 text-white border-l-violet-600'
                  : 'text-neutral-400 hover:bg-neutral-900/50 hover:text-neutral-300'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {active && (
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-neutral-900 px-2 py-4 space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group border-l-2 border-l-transparent',
                active
                  ? 'bg-sidebar-accent text-sidebar-foreground border-l-primary'
                  : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1 text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
