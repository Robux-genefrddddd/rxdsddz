import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Sparkles } from "lucide-react";

const NotFound = ({ page }: { page?: string }) => {
  const location = useLocation();

  useEffect(() => {
    if (!page) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname,
      );
    }
  }, [location.pathname, page]);

  return (
    <div className="w-full min-h-screen bg-background text-foreground dark flex flex-col items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        {page ? (
          <>
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold">{page}</h1>
              <p className="text-muted-foreground">
                Coming soon! This feature is still under development.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-sm text-muted-foreground">
                Let us know what you'd like to see here!
              </p>
              <Link
                to="/"
                className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Return to Home
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Page Not Found</p>
              <p className="text-muted-foreground">
                The page you're looking for doesn't exist.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NotFound;
