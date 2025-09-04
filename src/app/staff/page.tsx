import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { staff } from '@/lib/constants';

export default function StaffPage() {
  return (
    <main className="flex-1 py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-headline">
            Meet Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our instructors are experienced professionals and passionate
            educators dedicated to your success.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {staff.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col sm:flex-row items-center gap-6 p-6"
            >
              <Avatar className="w-24 h-24 border-4 border-primary">
                <AvatarImage
                  src={`${member.avatar}?random=${index}`}
                  alt={member.name}
                  data-ai-hint={member.hint}
                />
                <AvatarFallback>
                  {member.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardHeader className="p-0">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground mb-2">{member.bio}</p>
                  <p className="text-sm font-medium">
                    {member.qualifications}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
