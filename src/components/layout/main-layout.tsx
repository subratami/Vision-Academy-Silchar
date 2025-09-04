import type { ReactNode } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
