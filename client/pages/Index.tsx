import { Link } from 'react-router-dom';
import { Plus, FileText, Zap, Eye, Share2, Download, Sparkles, ArrowRight } from 'lucide-react';

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

  const templates = [
    { name: 'Mobile App', icon: '📱', color: 'from-blue-500 to-blue-600' },
    { name: 'Web Design', icon: '🌐', color: 'from-purple-500 to-purple-600' },
    { name: 'Game UI', icon: '🎮', color: 'from-green-500 to-green-600' },
    { name: 'Dashboard', icon: '📊', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">Rx</span>
            </div>
            <h1 className="text-xl font-bold">Rbxigma</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                New: Roblox Realistic Preview
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Design Roblox UIs
              <br />
              Like Never Before
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Figma++ for Roblox. Create stunning interfaces with professional design tools,
              then export directly to Roblox Studio with a single click.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/editor"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Create New Project
              </Link>
              <button className="px-8 py-4 border border-border rounded-lg font-semibold text-foreground hover:bg-card transition-colors">
                View Templates
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <div className="grid md:grid-cols-3 gap-8">
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
                <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Templates Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <h3 className="text-3xl font-bold mb-12">Start from Templates</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <button
                key={template.name}
                className={`group p-8 rounded-lg bg-gradient-to-br ${template.color} text-white hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}
              >
                <div className="text-4xl mb-4">{template.icon}</div>
                <h4 className="font-semibold text-lg group-hover:flex items-center gap-2">
                  {template.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">Recent Projects</h3>
            <Link to="/projects" className="text-primary hover:text-primary/90 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to="/editor"
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="w-full h-32 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors" />
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.date}</span>
                  <span>{project.collaborators} collaborators</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border mb-20">
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Create?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of designers creating stunning Roblox UIs with Rbxigma.
            </p>
            <Link
              to="/editor"
              className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Free Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
