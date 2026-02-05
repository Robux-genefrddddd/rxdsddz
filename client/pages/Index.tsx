import { Link } from 'react-router-dom';
import { Plus, ArrowRight, Eye, Download, Zap, Sparkles } from 'lucide-react';

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center">
              <span className="text-xs font-bold text-white">Rx</span>
            </div>
            <span className="text-sm font-semibold">Rbxigma</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Docs</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Community</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Pricing</a>
          </div>

          <Link
            to="/editor"
            className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-48 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
            <Sparkles className="w-3 h-3 text-violet-500" />
            <span className="text-xs text-neutral-400">New: Roblox Realistic Preview</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Design Roblox UIs
            <br />
            Like Never Before
          </h1>

          <p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Figma++ for Roblox. Create stunning interfaces with professional design tools,
            then export directly to Roblox Studio with a single click.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
            <Link
              to="/editor"
              className="px-6 py-2.5 bg-violet-600 text-white rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </Link>
            <button className="px-6 py-2.5 border border-neutral-800 rounded-lg font-semibold text-sm text-neutral-300 hover:border-neutral-700 hover:bg-neutral-950 transition-colors">
              View Templates
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-neutral-900">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'Roblox Preview',
                description: 'See your design in real Roblox environment with accurate rendering',
              },
              {
                icon: Download,
                title: 'Smart Export',
                description: 'Export to Studio with one click. Includes all constraints and layouts',
              },
              {
                icon: Zap,
                title: 'Pro Tools',
                description: 'Professional design tools including variants, tokens, and components',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-6 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all">
                  <Icon className="w-6 h-6 text-violet-500 mb-4" />
                  <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                  <p className="text-xs text-neutral-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Templates Section */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-neutral-900">
          <h2 className="text-3xl font-bold mb-12">Start from Templates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Mobile App', icon: '📱', color: 'from-blue-600 to-blue-700' },
              { name: 'Web Design', icon: '🌐', color: 'from-violet-600 to-violet-700' },
              { name: 'Game UI', icon: '🎮', color: 'from-green-600 to-green-700' },
              { name: 'Dashboard', icon: '📊', color: 'from-orange-600 to-orange-700' },
            ].map((template) => (
              <button
                key={template.name}
                className={`group p-6 rounded-lg bg-gradient-to-br ${template.color} text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all`}
              >
                <div className="text-3xl mb-3">{template.icon}</div>
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  {template.name}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-neutral-900">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <a href="#" className="text-violet-500 hover:text-violet-400 flex items-center gap-1 text-xs font-medium">
              View All <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to="/editor"
                className="group p-6 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/50 transition-all"
              >
                <div className="w-full h-32 bg-neutral-800 rounded-lg mb-4 group-hover:bg-neutral-700 transition-colors" />
                <h4 className="font-semibold text-sm mb-1 group-hover:text-violet-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-xs text-neutral-500 mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-neutral-600">
                  <span>{project.date}</span>
                  <span>{project.collaborators} collaborators</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-32 border-t border-neutral-900 mb-12">
          <div className="rounded-lg bg-neutral-950 border border-neutral-900 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Create?</h2>
            <p className="text-neutral-500 text-sm max-w-xl mx-auto">
              Join thousands of designers creating stunning Roblox UIs with Rbxigma.
            </p>
            <Link
              to="/editor"
              className="inline-flex px-6 py-2.5 bg-violet-600 text-white rounded-lg font-semibold text-sm hover:bg-violet-700 transition-colors"
            >
              Start Free Project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
