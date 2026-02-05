import { Link } from 'react-router-dom';
import { Plus, FileText, Zap, Eye, Share2, Download, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { name: 'Mobile App', icon: '📱', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Web Design', icon: '🌐', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Game UI', icon: '🎮', gradient: 'from-green-500 to-green-600' },
    { name: 'Dashboard', icon: '📊', gradient: 'from-orange-500 to-orange-600' },
  ];

  const features = [
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
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">Rx</span>
            </div>
            <span className="text-sm font-semibold">Rbxigma</span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to="/editor"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">New: Roblox Realistic Preview</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Design Roblox UIs
            <br />
            <span className="bg-gradient-to-r from-primary to-accent/80 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Figma++ for Roblox. Create stunning interfaces with professional design tools,
            then export directly to Roblox Studio with a single click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/editor"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New Project
            </Link>
            <button className="px-8 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-card hover:border-primary/50 transition-colors">
              View Templates
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Templates Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Start from Templates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <button
                key={template.name}
                className={`group relative p-8 rounded-lg bg-gradient-to-br ${template.gradient} text-white overflow-hidden hover:shadow-lg hover:scale-105 transition-all`}
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{template.icon}</div>
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    {template.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <a href="#" className="text-primary hover:text-primary/90 flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to="/editor"
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 hover:shadow-md transition-all"
              >
                {/* Thumbnail */}
                <div className="w-full h-32 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors" />

                {/* Content */}
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-4">{project.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.date}</span>
                  <span>{project.collaborators} collaborators</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border mb-16">
          <div className="rounded-xl bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Create?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join thousands of designers creating stunning Roblox UIs with Rbxigma.
            </p>
            <Link
              to="/editor"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all"
            >
              Start Free Project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
