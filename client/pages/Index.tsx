import { Link } from 'react-router-dom';
import { Plus, ArrowRight, Eye, Download, Zap } from 'lucide-react';

export default function Index() {
  const projects = [
    {
      id: 1,
      name: 'Mobile UI Kit',
      description: 'Complete mobile interface components',
      date: 'Mar 15, 2024',
      collaborators: 3,
    },
    {
      id: 2,
      name: 'Dashboard Design',
      description: 'Admin dashboard for Roblox games',
      date: 'Mar 10, 2024',
      collaborators: 2,
    },
    {
      id: 3,
      name: 'Game Store',
      description: 'Premium game marketplace UI',
      date: 'Mar 8, 2024',
      collaborators: 5,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900/50">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/2048px-Roblox_Logo.svg.png" 
              alt="Roblox"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold tracking-tight">Rbxigma</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.72)' }}>Docs</a>
            <a href="#" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.72)' }}>Community</a>
            <a href="#" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.72)' }}>Pricing</a>
          </div>

          {/* CTA */}
          <Link
            to="/editor"
            className="px-6 font-semibold text-xs text-black bg-white hover:bg-neutral-100 transition-colors"
            style={{ height: '44px', display: 'flex', alignItems: 'center', borderRadius: '999px' }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-12">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-8 py-28 text-center">
          {/* H1 - Reduced size and cleaner */}
          <h1
            className="font-bold leading-tight tracking-tight mb-6"
            style={{
              fontSize: '60px',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              maxWidth: '950px',
              margin: '0 auto 24px'
            }}
          >
            Design Roblox UIs
            <br />
            Professionally
          </h1>

          {/* Subtitle - SaaS pro style */}
          <p
            className="mb-8"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}
          >
            Professional design tools for Roblox. Create, export, and deploy with precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/editor"
              className="flex items-center justify-center gap-2 px-8 font-semibold text-sm text-black bg-white hover:bg-neutral-100 transition-colors"
              style={{ height: '48px', borderRadius: '12px' }}
            >
              <Plus className="w-4 h-4" />
              Create Project
            </Link>
            <button
              className="px-8 font-semibold text-sm transition-colors"
              style={{
                height: '48px',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.10)',
                backgroundColor: 'transparent',
                borderRadius: '12px'
              }}
            >
              View Templates
            </button>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900/50 py-12 bg-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Logo & Disclaimer */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="https://roblox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center opacity-100 hover:opacity-80 transition-opacity"
                aria-label="Roblox"
              >
                <img
                  src="https://i.ibb.co/B531Dsh6/roblox-logo-roblox-symbol-meaning-history-and-evolution-3-removebg-preview.png"
                  alt="Roblox"
                  className="h-10 object-contain"
                />
              </a>
              <span className="text-xs text-neutral-500 border-l border-white/10 pl-4">
                Not an official Roblox site
              </span>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:contact@rbxigma.com"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
