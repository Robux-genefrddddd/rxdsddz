import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Index() {
  return (
    <div 
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Navigation */}
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
          className="max-w-6xl mx-auto h-full flex items-center justify-between"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
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

          {/* Menu - Desktop only */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="#">Docs</NavLink>
            <NavLink href="#">Community</NavLink>
            <NavLink href="#">Pricing</NavLink>
          </div>

          {/* CTA Button */}
          <Link
            to="/editor"
            className="inline-flex items-center justify-center font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              height: '40px',
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

      {/* Main Content */}
      <main 
        className="flex-1 pt-20 pb-12"
        style={{ paddingTop: '80px' }}
      >
        {/* Hero Section */}
        <section 
          className="max-w-3xl mx-auto px-6 py-12 text-center"
        >
          {/* H1 - Proper size now */}
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.3px',
              color: 'hsl(var(--foreground))',
              marginBottom: '16px',
              animation: 'fadeInUp 0.5s ease-out',
            }}
          >
            Design Roblox UIs
            <br />
            <span style={{ color: 'hsl(var(--primary))' }}>Professionally</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-8"
            style={{
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'hsl(var(--muted-foreground))',
              maxWidth: '520px',
              margin: '16px auto 32px',
              animation: 'fadeInUp 0.5s ease-out 0.1s both',
            }}
          >
            Professional design tools for Roblox. Create, export, and deploy with precision. Join thousands of creators building amazing experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{
              animation: 'fadeInUp 0.5s ease-out 0.2s both',
            }}
          >
            <Link
              to="/editor"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                height: '40px',
                paddingLeft: '20px',
                paddingRight: '20px',
                borderRadius: '12px',
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Create Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              className="inline-flex items-center justify-center font-medium transition-all hover:bg-secondary"
              style={{
                height: '40px',
                paddingLeft: '20px',
                paddingRight: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'transparent',
                color: 'hsl(var(--foreground))',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              View Templates
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="max-w-5xl mx-auto px-6 py-20"
          style={{ marginTop: '48px' }}
        >
          <h2
            style={{
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '-0.2px',
              color: 'hsl(var(--foreground))',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Why Choose Rbxigma?
          </h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            style={{ marginTop: '24px' }}
          >
            <FeatureCard
              title="Pixel Perfect"
              description="Precise controls for professional design work"
            />
            <FeatureCard
              title="Roblox Native"
              description="Built specifically for the Roblox ecosystem"
            />
            <FeatureCard
              title="Collaborate"
              description="Share and work together with your team"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className="border-t"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.08)',
          backgroundColor: 'hsl(var(--card))',
          paddingTop: '32px',
          paddingBottom: '32px',
        }}
      >
        <div 
          className="max-w-4xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Logo + Disclaimer */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <a
                href="https://roblox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://i.ibb.co/B531Dsh6/roblox-logo-roblox-symbol-meaning-history-and-evolution-3-removebg-preview.png"
                  alt="Roblox"
                  style={{ height: '32px', objectFit: 'contain' }}
                />
              </a>
              <span 
                className="text-xs border-l pl-3"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'hsl(var(--muted-foreground))',
                  fontSize: '12px',
                  fontWeight: 400,
                }}
              >
                Not an official Roblox site
              </span>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-3">
              <SocialLink href="https://github.com" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialLink>
              <SocialLink href="mailto:hello@rbxigma.com" label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Sub-components
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
      style={{
        fontSize: '13px',
        fontWeight: 500,
        color: 'hsl(var(--muted-foreground))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'hsl(var(--primary))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
      }}
    >
      {children}
    </a>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="p-6 rounded-xl border transition-all hover:border-primary/30 group cursor-pointer"
      style={{
        backgroundColor: 'hsl(var(--card))',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'hsl(var(--foreground))',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          fontWeight: 400,
          color: 'hsl(var(--muted-foreground))',
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg transition-all"
      style={{
        backgroundColor: 'transparent',
        color: 'hsl(var(--muted-foreground))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'hsl(var(--secondary))';
        e.currentTarget.style.color = 'hsl(var(--foreground))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
      }}
      title={label}
    >
      {children}
    </a>
  );
}
