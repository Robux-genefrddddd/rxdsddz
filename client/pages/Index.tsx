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
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Docs</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Community</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">Pricing</a>
          </div>

          {/* CTA */}
          <Link
            to="/editor"
            className="px-5 py-2 bg-white text-black rounded-lg text-xs font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-8 py-40 text-center space-y-12">
          <h1 className="text-7xl font-bold leading-tight tracking-tight">
            Design Roblox
            <br />
            <span className="text-neutral-500">UIs Professionally</span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Professional design tools for Roblox. Create, export, and deploy with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/editor"
              className="px-7 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-neutral-100 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </Link>
            <button className="px-7 py-3 border border-neutral-800 rounded-lg font-semibold text-sm text-neutral-300 hover:border-neutral-700 hover:bg-neutral-950/50 transition-colors">
              View Templates
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl mx-auto px-8 py-32 border-t border-neutral-900/50">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Roblox Preview',
                description: 'See your design in real Roblox environment',
              },
              {
                icon: Download,
                title: 'Smart Export',
                description: 'Export to Studio with one click',
              },
              {
                icon: Zap,
                title: 'Pro Tools',
                description: 'Professional design tools and components',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="space-y-3">
                  <Icon className="w-6 h-6 text-white" />
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="text-xs text-neutral-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>


        {/* Recent Projects */}
        <section className="max-w-4xl mx-auto px-8 py-32 border-t border-neutral-900/50">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <a href="#" className="text-neutral-400 hover:text-neutral-300 flex items-center gap-1 text-xs font-medium">
              View All <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to="/editor"
                className="group p-6 rounded-lg bg-neutral-950 border border-neutral-800/50 hover:border-neutral-700 transition-all"
              >
                <div className="w-full h-32 bg-neutral-900 rounded-lg mb-4 group-hover:bg-neutral-800 transition-colors" />
                <h4 className="font-semibold text-sm mb-1">
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
        <section className="max-w-4xl mx-auto px-8 py-32 border-t border-neutral-900/50 mb-12">
          <div className="rounded-lg bg-neutral-950 border border-neutral-800/50 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Create?</h2>
            <p className="text-neutral-500 text-sm max-w-xl mx-auto">
              Join thousands of designers building with Rbxigma.
            </p>
            <Link
              to="/editor"
              className="inline-flex px-7 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              Start Free Project
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}
