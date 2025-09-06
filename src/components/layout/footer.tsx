import Image from 'next/image';
import mainlogo from '@/components/Vision Academy Logo.png'

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src={mainlogo}
              alt="Vision Academy Logo"
              width={24}
              height={24}
              className="rounded-full"
              data-ai-hint="logo"
            />
            <p className="text-lg font-bold">Vision Academy Silchar</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vision Academy Silchar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
