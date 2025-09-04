import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, History, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header title="About Us" />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight font-headline">
                The Heart of Vision Academy
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a premier institution dedicated to providing top-tier
                education in the field of technology, empowering the next
                generation of innovators, developers, and tech leaders.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/800/600"
                alt="Team working together"
                fill
                className="object-cover"
                data-ai-hint="team collaboration"
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
                  To empower students with the skills and knowledge needed to
                  excel in a rapidly evolving digital world through hands-on,
                  project-based learning.
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
                  Founded in 2010 by Dr. Evelyn Reed, the academy has grown from
                  a small group of educators to a thriving community of
                  learners and experts.
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
                  We believe in Excellence, Innovation, and Community, fostering
                  a supportive environment where students achieve their full
                  potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
