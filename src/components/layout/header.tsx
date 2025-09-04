'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Home,
  Info,
  Mail,
  Users,
  GraduationCap,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/staff', label: 'Our Staff', icon: Users },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Image
              src="https://picsum.photos/40/40"
              alt="Vision Academy Logo"
              width={32}
              height={32}
              className="rounded-full"
              data-ai-hint="logo"
            />
            Vision Academy Silchar
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex items-center mb-4">
                  <Link href="/" className="flex items-center gap-2 font-bold">
                    <Image
                      src="https://picsum.photos/40/40"
                      alt="Vision Academy Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                      data-ai-hint="logo"
                    />
                    Vision Academy Silchar
                  </Link>
                </div>
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
