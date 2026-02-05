import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Editor from "./pages/Editor";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  // Ensure dark mode is always enabled for Rbxigma
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/assets" element={<NotFound page="Assets" />} />
        <Route path="/components" element={<NotFound page="Components" />} />
        <Route
          path="/design-system"
          element={<NotFound page="Design System" />}
        />
        <Route path="/plugins" element={<NotFound page="Plugins" />} />
        <Route path="/export" element={<NotFound page="Export" />} />
        <Route path="/docs" element={<NotFound page="Documentation" />} />
        <Route path="/community" element={<NotFound page="Community" />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
