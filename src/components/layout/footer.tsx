import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <p className="text-lg font-bold">Vision Academy</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vision Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}