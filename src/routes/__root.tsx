import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/Navbar';
import { LoginGate } from '@/components/LoginGate';

const RootComponent = () => {
  return (
    <LoginGate>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background relative selection:bg-blue-500/30">
          <Navbar />
          <main className="bg-zinc-50 dark:bg-zinc-950">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </LoginGate>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
