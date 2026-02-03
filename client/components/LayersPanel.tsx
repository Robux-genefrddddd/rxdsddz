import { ChevronDown, ChevronRight, Plus, Eye, Lock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Layer {
  id: string;
  name: string;
  type: 'frame' | 'text' | 'group' | 'component';
  children?: Layer[];
  visible: boolean;
  locked: boolean;
}

interface Page {
  id: string;
  name: string;
  layers: Layer[];
}

const defaultPages: Page[] = [
  {
    id: 'page-1',
    name: 'Home',
    layers: [
      {
        id: 'frame-1',
        name: 'Desktop',
        type: 'frame',
        visible: true,
        locked: false,
        children: [
          {
            id: 'group-1',
            name: 'Header',
            type: 'group',
            visible: true,
            locked: false,
            children: [
              {
                id: 'text-1',
                name: 'Title',
                type: 'text',
                visible: true,
                locked: false,
              },
              {
                id: 'text-2',
                name: 'Subtitle',
                type: 'text',
                visible: true,
                locked: false,
              },
            ],
          },
          {
            id: 'group-2',
            name: 'Content',
            type: 'group',
            visible: true,
            locked: false,
            children: [
              {
                id: 'rect-1',
                name: 'Background',
                type: 'frame',
                visible: true,
                locked: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

interface LayerItemProps {
  layer: Layer;
  depth: number;
}

function LayerItem({ layer, depth }: LayerItemProps) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = layer.children && layer.children.length > 0;

  return (
    <div>
      <div
        className={cn(
          'flex items-center gap-1 px-2 py-1.5 text-xs cursor-pointer hover:bg-sidebar-accent rounded group',
          'text-sidebar-foreground'
        )}
        style={{ paddingLeft: `${12 + depth * 16}px` }}
      >
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-accent rounded"
          >
            {expanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>
        )}
        {!hasChildren && <div className="w-4" />}

        <span className="flex-1 truncate font-medium">{layer.name}</span>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-primary rounded"
            title={layer.visible ? 'Hide' : 'Show'}
          >
            {layer.visible && <Eye className="w-3 h-3" />}
          </button>
          <button
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-primary rounded"
            title={layer.locked ? 'Unlock' : 'Lock'}
          >
            {layer.locked && <Lock className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {expanded && hasChildren && (
        <div>
          {layer.children!.map((child) => (
            <LayerItem key={child.id} layer={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function LayersPanel() {
  const [pages, setPages] = useState(defaultPages);
  const [activePage, setActivePage] = useState(pages[0].id);
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set([pages[0].id]));

  const currentPage = pages.find((p) => p.id === activePage);

  const togglePageExpanded = (pageId: string) => {
    const newExpanded = new Set(expandedPages);
    if (newExpanded.has(pageId)) {
      newExpanded.delete(pageId);
    } else {
      newExpanded.add(pageId);
    }
    setExpandedPages(newExpanded);
  };

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Tabs */}
      <div className="flex items-center border-b border-sidebar-border px-3 py-2">
        <span className="text-xs font-semibold text-sidebar-foreground">Layers</span>
      </div>

      {/* Pages */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-1 py-2">
          {pages.map((page) => (
            <div key={page.id}>
              <div className="flex items-center gap-1 px-2 py-1.5 cursor-pointer hover:bg-sidebar-accent rounded">
                <button
                  onClick={() => togglePageExpanded(page.id)}
                  className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-accent rounded"
                >
                  {expandedPages.has(page.id) ? (
                    <ChevronDown className="w-3 h-3 text-sidebar-foreground" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-sidebar-foreground" />
                  )}
                </button>

                <div
                  className={cn(
                    'flex-1 text-xs font-semibold cursor-pointer rounded px-2 py-1 transition-colors duration-150',
                    activePage === page.id
                      ? 'bg-sidebar-accent text-sidebar-foreground border-l-primary'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  )}
                  onClick={() => setActivePage(page.id)}
                >
                  {page.name}
                </div>

                <button className="flex-shrink-0 w-4 h-4 flex items-center justify-center hover:bg-sidebar-primary rounded">
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {expandedPages.has(page.id) && (
                <div>
                  {page.layers.map((layer) => (
                    <LayerItem key={layer.id} layer={layer} depth={0} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Page Button */}
      <div className="border-t border-sidebar-border p-3">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-sidebar-primary text-sidebar-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Add Page
        </button>
      </div>
    </div>
  );
}
