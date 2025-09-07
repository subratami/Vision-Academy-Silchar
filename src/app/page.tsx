
'use client';
import aboutimg from "@/components/about.png"
import Image from 'next/image';
import Link from 'next/link';
import {
  Bell,
  ArrowRight,
  Target,
  History,
  HeartHandshake,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { announcements } from '@/lib/constants';
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

          {/* About Us Section */}
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight font-headline">
                About Us
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight font-headline">
                  The Heart of Vision Academy Silchar
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  We are a premier institution in Barak Valley, dedicated to
                  providing top-tier coaching for competitive exams, empowering
                  aspirants to achieve their career goals.
                </p>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={aboutimg}
                  alt="Team working together"
                  fill
                  className="object-cover"
                  data-ai-hint="students classroom"
                />
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Target className="w-10 h-10 text-primary" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To empower students with the knowledge and skills needed to
                    excel in competitive exams through expert guidance and
                    comprehensive study materials.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <History className="w-10 h-10 text-primary" />
                  <CardTitle>Our History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With 13 years of excellence, Vision Academy Silchar has guided over
                    700+ students to government jobs and 300+ to top MBA
                    colleges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <HeartHandshake className="w-10 h-10 text-primary" />
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe in Excellence, Dedication, and Student Success,
                    fostering a supportive environment for aspirants to achieve
                    their potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
