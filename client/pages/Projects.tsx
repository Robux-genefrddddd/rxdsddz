import { Search, Grid, List, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSort, setFilterSort] = useState('recent');

  // Mock projects data
  const projects = [
    {
      id: 1,
      name: 'Mobile UI Kit',
      description: 'Complete mobile interface components',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Crect fill="%232F80FF" x="40" y="30" width="120" height="90" rx="8"/%3E%3C/svg%3E',
      date: 'Mar 15, 2024',
      collaborators: 3,
      starred: false,
    },
    {
      id: 2,
      name: 'Dashboard Design',
      description: 'Admin dashboard for Roblox games',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Crect fill="%23353535" x="10" y="10" width="50" height="50"/%3E%3Crect fill="%23353535" x="70" y="10" width="50" height="50"/%3E%3Crect fill="%23353535" x="130" y="10" width="50" height="50"/%3E%3C/svg%3E',
      date: 'Mar 10, 2024',
      collaborators: 2,
      starred: false,
    },
    {
      id: 3,
      name: 'Game Store',
      description: 'Premium game marketplace UI',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Crect fill="%232F80FF" x="20" y="20" width="160" height="110" rx="6"/%3E%3C/svg%3E',
      date: 'Mar 8, 2024',
      collaborators: 5,
      starred: true,
    },
    {
      id: 4,
      name: 'Landing Page',
      description: 'Marketing website redesign',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Crect fill="%23353535" x="10" y="30" width="180" height="90" rx="4"/%3E%3C/svg%3E',
      date: 'Mar 1, 2024',
      collaborators: 1,
      starred: false,
    },
    {
      id: 5,
      name: 'Component Library',
      description: 'Reusable UI component system',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Ccircle cx="50" cy="50" r="20" fill="%232F80FF"/%3E%3Crect x="90" y="35" width="40" height="30" fill="%232F80FF"/%3E%3Crect x="140" y="40" width="50" height="40" fill="%232F80FF" rx="6"/%3E%3C/svg%3E',
      date: 'Feb 28, 2024',
      collaborators: 4,
      starred: true,
    },
    {
      id: 6,
      name: 'Settings Dashboard',
      description: 'User settings and preferences UI',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23303030" width="200" height="150"/%3E%3Crect fill="%23353535" x="30" y="30" width="140" height="90" rx="8"/%3E%3C/svg%3E',
      date: 'Feb 20, 2024',
      collaborators: 2,
      starred: false,
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{ backgroundColor: 'hsl(var(--background))' }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(47, 128, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(47, 128, 255, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      {/* Decorative grid pattern */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* TopBar */}
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
          className="max-w-7xl mx-auto h-full flex items-center justify-between"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          <Link to="/" className="flex items-center gap-2 group">
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

          <div className="flex-1 max-w-xs mx-8">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '32px',
                  paddingRight: '12px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  fontSize: '14px',
                  backgroundColor: 'hsl(var(--input))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  color: 'hsl(var(--foreground))',
                  outline: 'none',
                  transition: 'var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                  e.currentTarget.style.boxShadow = 'inset 0 0 0 2px rgba(47, 128, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className="p-2 rounded-lg transition-all"
              style={{
                backgroundColor: viewMode === 'grid' ? 'hsl(var(--secondary))' : 'transparent',
                color: viewMode === 'grid' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
              }}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className="p-2 rounded-lg transition-all"
              style={{
                backgroundColor: viewMode === 'list' ? 'hsl(var(--secondary))' : 'transparent',
                color: viewMode === 'list' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
              }}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          paddingTop: '80px',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingBottom: '40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="max-w-7xl mx-auto mb-8"
          style={{ marginTop: '24px' }}
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'hsl(var(--foreground))',
                  marginBottom: '4px',
                }}
              >
                My Projects
              </h1>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'hsl(var(--muted-foreground))',
                }}
              >
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  backgroundColor: 'hsl(var(--secondary))',
                  color: 'hsl(var(--foreground))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                }}
              >
                Last viewed
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid / List */}
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredProjects.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div
              className="text-center py-12"
              style={{
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: 400 }}>
                No projects found
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Project Card Component (Grid View)
function ProjectCard({ project }: { project: any }) {
  return (
    <div
      className="group rounded-xl border overflow-hidden transition-all cursor-pointer"
      style={{
        backgroundColor: 'hsl(var(--card))',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'hsl(var(--primary))';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          aspectRatio: '16 / 9',
          backgroundColor: 'hsl(var(--popover))',
          overflow: 'hidden',
        }}
      >
        <img
          src={project.thumbnail}
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '16px' }}>
        <h3
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'hsl(var(--foreground))',
            marginBottom: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'hsl(var(--muted-foreground))',
            marginBottom: '12px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {project.description}
        </p>

        {/* Metadata */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'hsl(var(--muted-foreground))',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '12px',
          }}
        >
          <span>{project.date}</span>
          <span>{project.collaborators} collaborator{project.collaborators !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
}

// Project List Item Component (List View)
function ProjectListItem({ project }: { project: any }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer group"
      style={{
        backgroundColor: 'hsl(var(--card))',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'hsl(var(--secondary))';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'hsl(var(--card))';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: '80px',
          height: '60px',
          flexShrink: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'hsl(var(--popover))',
        }}
      >
        <img
          src={project.thumbnail}
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'hsl(var(--foreground))',
            marginBottom: '2px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Meta */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '12px',
          fontWeight: 400,
          color: 'hsl(var(--muted-foreground))',
          whiteSpace: 'nowrap',
        }}
      >
        <span>{project.date}</span>
        <span>{project.collaborators} collab.</span>
      </div>
    </div>
  );
}
