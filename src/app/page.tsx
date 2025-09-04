
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { announcements, courses } from '@/lib/constants';
import { useEffect, useState } from 'react';

function AnnouncementDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, [date]);

  return <CardDescription>{formattedDate}</CardDescription>;
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-primary/10">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Academy students studying"
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint="classroom students"
        />
        <div className="relative z-10 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline text-foreground">
            Your Gateway to a Successful Career
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Welcome to Vision Academy Silchar, the No. 1 coaching center in Barak
            Valley with 13 years of excellence in competitive exam preparation.
          </p>
          <Button asChild size="lg">
            <Link href="/courses">
              Explore Our Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="py-12 lg:py-16">
        <div className="container px-4 md:px-6 space-y-16">
          {/* Announcements Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-6 font-headline">
              Latest Announcements
            </h2>
            <div className="space-y-4">
              {announcements.slice(0, 2).map(announcement => (
                <Card key={announcement.id}>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Bell className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle>{announcement.title}</CardTitle>
                      <AnnouncementDate date={announcement.date} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Featured Courses Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-6 font-headline">
              Our Coaching Programs
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.slice(0, 3).map((course, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={`${course.image.src}?random=${index}`}
                        alt={course.title}
                        fill
                        className="rounded-t-lg object-cover"
                        data-ai-hint={course.image.hint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 space-y-2">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild variant="secondary" className="w-full">
                      <Link href="/courses">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
