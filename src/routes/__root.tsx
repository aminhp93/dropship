import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/theme-provider';
import { LoginGate } from '@/components/LoginGate';

const RootComponent = () => {
  return (
    <LoginGate>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background relative selection:bg-blue-500/30">
          <main className="bg-zinc-50 dark:bg-zinc-950 h-screen">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </LoginGate>
  );
};

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 text-center p-6">
      <div className="text-xl font-bold">404 - Page Not Found</div>
    </div>
  );
}

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  component: RootComponent,
});
