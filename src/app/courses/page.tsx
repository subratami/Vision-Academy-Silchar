import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { courses } from '@/lib/constants';

export default function CoursesPage() {
  return (
    <main className="flex-1 py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-headline">
            Explore Our Curriculum
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From foundational concepts to advanced specializations, our
            courses are designed to prepare you for a successful career in
            tech.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative aspect-video">
                <Image
                  src={`${course.image.src}?random=${index}`}
                  alt={course.title}
                  fill
                  className="object-cover"
                  data-ai-hint={course.image.hint}
                />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.schedule}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
