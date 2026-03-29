import './globals.css';
import Header from '@/components/Header';
import NavTabs from '@/components/NavTabs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body className="bg-gray-100 text-gray-900" suppressHydrationWarning={true}>
        <Header />
        <NavTabs />
        <main className="container mx-auto max-w-[1200px] bg-white p-6 mt-4 min-h-screen shadow-sm">
          {children}
        </main>
      </body>
    </html>
  );
}
