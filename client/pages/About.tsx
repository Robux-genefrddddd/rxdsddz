import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Designer and developer with 8+ years in UX tools',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Head of Design',
      bio: 'Previously at Figma. Passionate about design systems',
      image: '👩‍🎨',
    },
    {
      id: 3,
      name: 'Marcus Williams',
      role: 'Lead Engineer',
      bio: 'Full-stack developer specialized in graphics tools',
      image: '👨‍💻',
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      role: 'Product Lead',
      bio: 'Community-focused product builder from Roblox',
      image: '👩‍🔬',
    },
  ];

  const values = [
    {
      title: 'Precision',
      description: 'Tools built for creators who demand pixel-perfect control',
    },
    {
      title: 'Community',
      description: 'Built for and with the Roblox developer community',
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving with new features and capabilities',
    },
    {
      title: 'Accessibility',
      description: 'Professional tools that are easy to learn and use',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900/50">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/2048px-Roblox_Logo.svg.png"
              alt="Roblox"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold tracking-tight">Rbxigma</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.72)' }}>Home</Link>
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.72)' }}>Docs</a>
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.72)' }}>Community</a>
          </div>

          <Link
            to="/editor"
            className="font-semibold text-xs text-white hover:opacity-90 transition-opacity"
            style={{
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              paddingLeft: '18px',
              paddingRight: '18px',
              backgroundColor: '#E4405E'
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-8 py-20 text-center relative">
          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes fadeInUpDelay {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          <h1
            className="font-bold leading-tight tracking-tight mb-4"
            style={{
              fontSize: '60px',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-1px',
              maxWidth: '800px',
              margin: '0 auto 16px',
              animation: 'fadeInUp 0.6s ease-out'
            }}
          >
            Passionate About
            <br />
            Design Tools
          </h1>

          <p
            className="mb-8"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto 48px',
              animation: 'fadeInUpDelay 0.6s ease-out 0.2s both'
            }}
          >
            We're a team of designers, developers, and builders creating the future of Roblox game design.
          </p>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-8 rounded-lg border transition-all hover:border-opacity-50"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  animation: `fadeInUpDelay 0.6s ease-out ${0.3 + index * 0.1}s both`
                }}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.68)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <h2
            className="text-4xl font-bold mb-16 text-center"
            style={{
              animation: 'fadeInUp 0.6s ease-out'
            }}
          >
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="p-6 rounded-lg border transition-all hover:border-opacity-50"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  animation: `fadeInUpDelay 0.6s ease-out ${0.4 + index * 0.1}s both`
                }}
              >
                <div
                  className="text-5xl mb-4 text-center"
                  style={{ lineHeight: 1 }}
                >
                  {member.image}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p
                  className="text-sm mb-3 font-medium"
                  style={{ color: '#1E90FF' }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.68)' }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-3xl mx-auto px-8 py-20">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6">
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
              Rbxigma was born from a simple observation: Roblox creators deserved better tools. The community has always been the heart of Roblox, and we wanted to build something that empowers creators to design with precision and confidence.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
              What started as a side project has grown into a mission. We're committed to creating professional-grade design tools specifically built for the Roblox ecosystem, combining the power of industry-standard editors with Roblox-specific features.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8 }}>
              Every feature we build, every decision we make, is guided by our community. We listen, we iterate, and we never stop improving.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-2xl mx-auto px-8 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create?</h2>
          <p
            className="mb-8"
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.6,
            }}
          >
            Join thousands of Roblox creators building amazing experiences with Rbxigma.
          </p>
          <Link
            to="/editor"
            className="inline-flex items-center justify-center gap-2 px-8 font-semibold text-sm text-white hover:shadow-lg transition-all"
            style={{
              height: '48px',
              backgroundColor: '#E4405E',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(228, 64, 94, 0.25)',
              border: '1px solid rgba(228, 64, 94, 0.3)'
            }}
          >
            Start Building
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900/50 py-12 bg-black">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@rbxigma.com"
                className="p-2 rounded-lg hover:bg-white/8 transition-all duration-200 text-neutral-500 hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
