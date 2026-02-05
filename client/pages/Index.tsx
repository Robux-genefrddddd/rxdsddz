import {
  ArrowRight,
  Zap,
  Palette,
  Users,
  Code2,
  Sparkles,
  Check,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div
      style={{ backgroundColor: "hsl(var(--background))" }}
      className="w-full min-h-screen"
    >
      <Navigation />

      <main style={{ paddingTop: "56px" }}>
        {/* ========== HERO SECTION ========== */}
        <section
          className="relative min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
          style={{
            background: `
              linear-gradient(135deg, rgba(47, 128, 255, 0.05) 0%, transparent 50%),
              linear-gradient(45deg, transparent 50%, rgba(47, 128, 255, 0.03) 100%)
            `,
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in"
              style={{
                backgroundColor: "rgba(47, 128, 255, 0.1)",
                borderColor: "rgba(47, 128, 255, 0.2)",
                fontSize: "12px",
                fontWeight: 600,
                color: "hsl(var(--primary))",
                animation: "fadeInUp 0.6s ease-out",
              }}
            >
              <Sparkles className="w-3 h-3" />
              <span>Welcome to the future of design</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(40px, 8vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                color: "hsl(var(--foreground))",
                marginBottom: "20px",
                animation: "fadeInUp 0.6s ease-out 0.1s both",
              }}
            >
              Design Roblox UIs
              <br />
              <span style={{ color: "hsl(var(--primary))" }}>
                Like a Professional
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "hsl(var(--muted-foreground))",
                maxWidth: "600px",
                margin: "20px auto 40px",
                animation: "fadeInUp 0.6s ease-out 0.2s both",
              }}
            >
              Professional design tools built specifically for the Roblox
              ecosystem. Create, collaborate, and deploy with precision.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{
                animation: "fadeInUp 0.6s ease-out 0.3s both",
              }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{
                  height: "48px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  borderRadius: "12px",
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "0 8px 24px rgba(47, 128, 255, 0.3)",
                }}
              >
                Start Designing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center font-medium transition-all hover:bg-secondary"
                style={{
                  height: "48px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "transparent",
                  color: "hsl(var(--foreground))",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FEATURES SECTION ========== */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "hsl(var(--card))" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "hsl(var(--foreground))",
                  marginBottom: "12px",
                }}
              >
                Powerful Features
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "hsl(var(--muted-foreground))",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                Everything you need to create professional Roblox UIs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureItem
                icon={<Zap className="w-6 h-6" />}
                title="Lightning Fast"
                description="Optimized for speed. Design complex interfaces without lag."
              />
              <FeatureItem
                icon={<Palette className="w-6 h-6" />}
                title="Pixel Perfect"
                description="Precise controls for every detail of your design."
              />
              <FeatureItem
                icon={<Users className="w-6 h-6" />}
                title="Collaborate"
                description="Work together with your team in real-time."
              />
              <FeatureItem
                icon={<Code2 className="w-6 h-6" />}
                title="Export Code"
                description="Generate clean code ready for production."
              />
              <FeatureItem
                icon={<Sparkles className="w-6 h-6" />}
                title="Smart Components"
                description="Reusable components that scale with your project."
              />
              <FeatureItem
                icon={<Check className="w-6 h-6" />}
                title="Quality Assurance"
                description="Built-in tools to ensure design consistency."
              />
            </div>
          </div>
        </section>

        {/* ========== STATS SECTION ========== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StatCard number="10K+" label="Designers" />
              <StatCard number="50M+" label="Projects" />
              <StatCard number="99.9%" label="Uptime" />
              <StatCard number="24/7" label="Support" />
            </div>
          </div>
        </section>

        {/* ========== PROJECTS SHOWCASE ========== */}
        <section
          className="py-24 px-6"
          style={{ backgroundColor: "hsl(var(--card))" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "hsl(var(--foreground))",
                    marginBottom: "8px",
                  }}
                >
                  Featured Projects
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  See what creators are building
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "hsl(var(--primary))",
                }}
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  name: "Mobile UI Kit",
                  desc: "Complete mobile interface",
                  color: "#2F80FF",
                },
                {
                  name: "Dashboard",
                  desc: "Admin dashboard design",
                  color: "#FF6B6B",
                },
                {
                  name: "Game Store",
                  desc: "Marketplace UI system",
                  color: "#51CF66",
                },
                {
                  name: "Components",
                  desc: "Reusable UI library",
                  color: "#FFD93D",
                },
              ].map((project, i) => (
                <ProjectShowcaseCard key={i} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(47, 128, 255, 0.1) 0%, transparent 70%)
              `,
            }}
          />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2
              style={{
                fontSize: "40px",
                fontWeight: 700,
                color: "hsl(var(--foreground))",
                marginBottom: "16px",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "hsl(var(--muted-foreground))",
                marginBottom: "32px",
              }}
            >
              Join thousands of creators already building amazing Roblox UIs
              with Rbxigma.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all hover:opacity-90 active:scale-95"
              style={{
                height: "48px",
                paddingLeft: "24px",
                paddingRight: "24px",
                borderRadius: "12px",
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                fontSize: "15px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(47, 128, 255, 0.3)",
              }}
            >
              Create Your First Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer
          className="border-t py-12 px-6"
          style={{
            borderColor: "rgba(255, 255, 255, 0.08)",
            backgroundColor: "hsl(var(--card))",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/2048px-Roblox_Logo.svg.png"
                    alt="Roblox"
                    className="w-5 h-5"
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                    }}
                  >
                    Rbxigma
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  Professional design tools for Roblox
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  Product
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="/projects">Projects</FooterLink>
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="#">Pricing</FooterLink>
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  Resources
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#">Community</FooterLink>
                  <FooterLink href="#">Support</FooterLink>
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "hsl(var(--foreground))",
                  }}
                >
                  Legal
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </ul>
              </div>
            </div>

            <div
              className="border-t pt-8 flex flex-col md:flex-row justify-between items-center"
              style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                © 2024 Rbxigma. Not an official Roblox site.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a
                  href="https://github.com"
                  style={{ fontSize: "12px", color: "hsl(var(--primary))" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  style={{ fontSize: "12px", color: "hsl(var(--primary))" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href="mailto:hello@rbxigma.com"
                  style={{ fontSize: "12px", color: "hsl(var(--primary))" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Animations */}
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
      `}</style>
    </div>
  );
}

// Component: Feature Item
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="p-8 rounded-xl border transition-all hover:border-primary/30 group cursor-pointer"
      style={{
        backgroundColor: "hsl(var(--popover))",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          backgroundColor: "rgba(47, 128, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "hsl(var(--primary))",
          marginBottom: "16px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "8px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
        {description}
      </p>
    </div>
  );
}

// Component: Stat Card
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="p-8 rounded-xl border text-center"
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "hsl(var(--primary))",
          marginBottom: "8px",
        }}
      >
        {number}
      </div>
      <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
        {label}
      </p>
    </div>
  );
}

// Component: Project Showcase Card
function ProjectShowcaseCard({
  name,
  desc,
  color,
}: {
  name: string;
  desc: string;
  color: string;
}) {
  return (
    <div
      className="p-6 rounded-xl border overflow-hidden transition-all group cursor-pointer"
      style={{
        backgroundColor: "hsl(var(--popover))",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "120px",
          borderRadius: "8px",
          background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`,
          border: `1px solid ${color}40`,
          marginBottom: "12px",
        }}
      />
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "4px",
          color: "hsl(var(--foreground))",
        }}
      >
        {name}
      </h3>
      <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))" }}>
        {desc}
      </p>
    </div>
  );
}

// Component: Footer Link
function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      style={{
        fontSize: "13px",
        color: "hsl(var(--muted-foreground))",
        display: "block",
        transition: "color var(--transition-fast)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "hsl(var(--primary))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "hsl(var(--muted-foreground))";
      }}
    >
      {children}
    </a>
  );
}
