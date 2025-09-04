import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, History, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-1 py-12 lg:py-16">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight font-headline">
              The Heart of Vision Academy Silchar
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a premier institution in Barak Valley, dedicated to
              providing top-tier coaching for competitive exams, empowering
              aspirants to achieve their career goals.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/800/600"
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
      </div>
    </main>
  );
}
