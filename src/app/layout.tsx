import './globals.css';
import Navigation from '../components/Navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-secondary font-sans selection:bg-primary/20 selection:text-primary">
        <Navigation />
        <main className="pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
