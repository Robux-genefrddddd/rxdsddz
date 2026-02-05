import { Search, Eye, Share2, Download, User, Menu } from "lucide-react";

export function TopBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        height: "56px",
        backgroundColor: "hsl(var(--card))",
        borderColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
        boxShadow: "var(--shadow-xs)",
      }}
    >
      <div
        className="flex items-center justify-between h-full"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Left Section: Title + Breadcrumb */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <span
            className="font-semibold"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "hsl(var(--foreground))",
            }}
          >
            Editor
          </span>

          {/* Breadcrumb - hidden on mobile */}
          <div
            className="hidden sm:flex items-center gap-2 pl-4 border-l"
            style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "hsl(var(--muted-foreground))",
              }}
            >
              My Project
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              /
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "hsl(var(--foreground))",
              }}
            >
              Frame 1
            </span>
          </div>
        </div>

        {/* Center Section: Search - hidden on mobile */}
        <div className="hidden lg:flex flex-1 max-w-xs mx-4">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "hsl(var(--muted-foreground))" }}
            />
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                paddingLeft: "32px",
                paddingRight: "12px",
                paddingTop: "8px",
                paddingBottom: "8px",
                fontSize: "14px",
                fontWeight: 400,
                backgroundColor: "hsl(var(--input))",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                color: "hsl(var(--foreground))",
                outline: "none",
                transition: "var(--transition-fast)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--primary))";
                e.currentTarget.style.boxShadow =
                  "inset 0 0 0 2px rgba(47, 128, 255, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-2">
          {/* Action Buttons - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1">
            <ActionButton label="Preview" icon={<Eye className="w-4 h-4" />} />
            <ActionButton
              label="Export"
              icon={<Download className="w-4 h-4" />}
            />
            <ActionButton label="Share" icon={<Share2 className="w-4 h-4" />} />
          </div>

          {/* Divider */}
          <div
            className="w-px h-6 hidden sm:block"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          />

          {/* Avatar Button */}
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "white",
              opacity: 0.9,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(47, 128, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.boxShadow = "none";
            }}
            title="User Profile"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Action Button Sub-component
function ActionButton({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
      style={{
        fontSize: "13px",
        fontWeight: 500,
        color: "hsl(var(--foreground))",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "hsl(var(--secondary))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
      title={label}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}
