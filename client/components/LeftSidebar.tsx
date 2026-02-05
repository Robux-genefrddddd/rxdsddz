import { Home, Folder, Palette, Layers3, Grid3x3, Zap, Download, BookOpen, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: Home, href: '/', id: 'home' },
  { label: 'My Projects', icon: Folder, href: '/projects', id: 'projects' },
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
    <div 
      className="fixed left-0 top-14 bottom-0 flex flex-col border-r"
      style={{
        width: '240px',
        backgroundColor: 'hsl(var(--popover))',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      
      {/* Main Navigation */}
      <nav 
        className="flex-1 overflow-y-auto space-y-1"
        style={{
          padding: '16px 12px',
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <SidebarItem
              key={item.id}
              icon={<Icon className="w-4 h-4 flex-shrink-0" />}
              label={item.label}
              href={item.href}
              active={active}
            />
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div 
        className="space-y-1 border-t"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.08)',
          padding: '16px 12px',
        }}
      >
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <SidebarItem
              key={item.id}
              icon={<Icon className="w-4 h-4 flex-shrink-0" />}
              label={item.label}
              href={item.href}
              active={active}
            />
          );
        })}
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({
  icon,
  label,
  href,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      to={href}
      className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
      style={{
        height: '40px',
        fontSize: '14px',
        fontWeight: 500,
        backgroundColor: active ? 'hsl(var(--secondary))' : 'transparent',
        color: active ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'hsl(var(--secondary))';
          e.currentTarget.style.color = 'hsl(var(--foreground))';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
        }
      }}
    >
      {icon}
      <span className="flex-1">{label}</span>
    </Link>
  );
}
