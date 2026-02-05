import { Menu, X, Home, Folder, Users, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', icon: Home, href: '/', id: 'home' },
    { label: 'Projects', icon: Folder, href: '/projects', id: 'projects' },
    { label: 'About', icon: Users, href: '/about', id: 'about' },
    { label: 'Docs', icon: BookOpen, href: '#', id: 'docs' },
    { label: 'Contact', icon: Mail, href: '#', id: 'contact' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          height: '56px',
          backgroundColor: 'hsl(var(--card))',
          borderColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg transition-all"
            style={{
              backgroundColor: isOpen ? 'hsl(var(--secondary))' : 'transparent',
              color: 'hsl(var(--foreground))',
              cursor: 'pointer',
            }}
            title="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo/Brand - centered */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/2048px-Roblox_Logo.svg.png"
              alt="Roblox"
              className="w-5 h-5 group-hover:opacity-80 transition-opacity"
            />
            <span
              className="font-semibold group-hover:opacity-80 transition-opacity"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'hsl(var(--foreground))',
              }}
            >
              Rbxigma
            </span>
          </Link>

          {/* CTA Button - right */}
          <Link
            to="/projects"
            className="inline-flex items-center justify-center font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              height: '36px',
              paddingLeft: '16px',
              paddingRight: '16px',
              borderRadius: '12px',
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className="fixed left-0 top-14 bottom-0 z-40 border-r transition-all duration-300"
        style={{
          width: '240px',
          backgroundColor: 'hsl(var(--popover))',
          borderColor: 'rgba(255, 255, 255, 0.08)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: isOpen ? 'var(--shadow-lg)' : 'none',
          overflowY: 'auto',
        }}
      >
        <div style={{ padding: '24px 12px' }}>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 px-3 py-3 rounded-lg transition-all"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'hsl(var(--muted-foreground))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--secondary))';
                    e.currentTarget.style.color = 'hsl(var(--primary))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-14 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          style={{
            animation: 'fadeIn 0.2s ease-out',
          }}
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
