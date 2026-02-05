import { Sliders, Zap, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type TabType = "design" | "prototype" | "export";

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState<TabType>("design");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["size", "layout", "appearance"]),
  );

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const SectionHeader = ({ title, id }: { title: string; id: string }) => (
    <button
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between px-4 py-3 border-t border-border hover:bg-card/50 transition-colors group"
    >
      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
        {title}
      </span>
      <ChevronDown
        className={cn(
          "w-4 h-4 text-muted-foreground transition-transform",
          !expandedSections.has(id) && "-rotate-90",
        )}
      />
    </button>
  );

  const PropertyInput = ({
    label,
    value,
    placeholder,
  }: {
    label: string;
    value: string;
    placeholder: string;
  }) => (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground block">
        {label}
      </label>
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-xs bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 text-foreground placeholder-muted-foreground"
      />
    </div>
  );

  return (
    <div className="w-80 bg-black border-l border-neutral-900 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-border h-11">
        {[
          { id: "design", label: "Design", icon: Sliders },
          { id: "prototype", label: "Prototype", icon: Zap },
          { id: "export", label: "Export", icon: Download },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition-colors",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "design" && (
          <div>
            {/* Size & Position */}
            {expandedSections.has("size") && (
              <>
                <SectionHeader title="Size & Position" id="size" />
                <div className="px-4 py-3 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <PropertyInput label="W" value="320" placeholder="Width" />
                    <PropertyInput label="H" value="640" placeholder="Height" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <PropertyInput label="X" value="0" placeholder="X" />
                    <PropertyInput label="Y" value="0" placeholder="Y" />
                  </div>
                </div>
              </>
            )}

            {/* Layout */}
            {expandedSections.has("layout") && (
              <>
                <SectionHeader title="Layout" id="layout" />
                <div className="px-4 py-3 space-y-3">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground block">
                      Anchor Point
                    </label>
                    <div className="grid grid-cols-3 gap-1 p-2 bg-secondary rounded-md">
                      {[0, 1, 2].map((x) =>
                        [0, 1, 2].map((y) => (
                          <button
                            key={`${x}-${y}`}
                            className={cn(
                              "w-full h-6 rounded-sm border border-border transition-colors",
                              x === 1 && y === 1
                                ? "bg-primary border-primary"
                                : "bg-input hover:border-primary",
                            )}
                          />
                        )),
                      )}
                    </div>
                  </div>

                  <PropertyInput
                    label="Constraints"
                    value="Aspect Ratio"
                    placeholder="Constraints"
                  />

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground block">
                      Layout Mode
                    </label>
                    <select className="w-full px-3 py-2 text-xs bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                      <option>None</option>
                      <option>UIListLayout</option>
                      <option>UIGridLayout</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* Appearance */}
            {expandedSections.has("appearance") && (
              <>
                <SectionHeader title="Appearance" id="appearance" />
                <div className="px-4 py-3 space-y-3">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground block">
                      Fill
                    </label>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent border border-primary" />
                      <input
                        type="text"
                        placeholder="Color"
                        className="flex-1 px-3 py-2 text-xs bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <PropertyInput
                    label="Corner Radius"
                    value="8"
                    placeholder="Radius"
                  />

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground block">
                      Stroke
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Width"
                        className="flex-1 px-3 py-2 text-xs bg-secondary border border-border rounded-md text-foreground"
                      />
                      <button className="w-10 h-10 rounded-md bg-input border border-border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground block">
                      Shadow
                    </label>
                    <select className="w-full px-3 py-2 text-xs bg-secondary border border-border rounded-md text-foreground">
                      <option>None</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "prototype" && (
          <div className="p-4">
            <p className="text-xs text-muted-foreground">
              No prototype interactions selected. Select an element to add
              interactions.
            </p>
          </div>
        )}

        {activeTab === "export" && (
          <div className="p-4 space-y-3">
            <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4" />
              Export to Studio
            </Button>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground block">
                Export Preset
              </label>
              <select className="w-full px-3 py-2 text-xs bg-secondary border border-border rounded-md text-foreground">
                <option>PNG @1x</option>
                <option>PNG @2x</option>
                <option>SVG</option>
                <option>JSON (Roblox)</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
